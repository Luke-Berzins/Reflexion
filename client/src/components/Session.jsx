import ReactPlayer from "react-player";
import React from "react";
import Webcam from "react-webcam"
import axios from "axios";
import "./Session.scss"
import VoiceDetection from './VoiceDetection';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function VideoPlayer(props) {
  const [show, setShow] = useState(false);
  const { video, delay } = props;

  useEffect(() => {
    if(delay) {
      const timeout = setTimeout(() => {
        setShow(true);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setShow(true);
    }
  }, [delay])

  if(show === false) return null;

  return <div id="video-embed" className="video-embed animate__animated animate__fadeIn animate__slower animate__delay-3s">
      <ReactPlayer
        playing
        url={video}
      />
    </div>
}
const debounceInterval = 5000;
window.lastRun = 0;

export default function Session(props) {

  const [state, setState] = useState({
    poseArray : [],
    poseIndex: 0,
    pageView: false,
  })
  let { id } = useParams();

  const startSequence = () => {
    setState(prev => ({...prev, pageView: true}))
  }

  const poseIncrementer = (direction) => {

    if(window.lastRun + debounceInterval > Date.now()) {
      console.log('Hey the debounce did a thing!');
      return;
    }

    setState((prev) => {
      let nextPoseIndex = prev.poseIndex;
      if((direction > 0 && prev.poseIndex < prev.poseArray.length - 1) || (direction < 0 && prev.poseIndex > 0)) {
        nextPoseIndex += direction;
        console.log('Direction:', direction)
      }
      return ({...prev, poseIndex: nextPoseIndex})
    })
    window.lastRun = Date.now();
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/poses/build", {
        params: {
          session: id
        }
      })
    ]).then((all) => {
      console.log(all[0].data)
      setState(prev => ({...prev, poseArray: all[0].data, currentPose: all[0].data[0] }));
    })
  }, [id]);

  const videoConstraints = {
    facingMode: "user",
    width:  { min: 750 },
    height: { min: 480 },
  };

  const currentPose = state.poseArray[state.poseIndex];


    return (
      <div id="session" onload="setList(id)" className="animate__animated animate__fadeIn">
        <h1>{String(state.pageView)}</h1>
        <div className="voice-detection">
          <VoiceDetection poseIncrementer={ poseIncrementer } startSequence={ startSequence } button={state.pageView}/>
         {/* { state.pageView ?
            <VoiceDetection poseIncrementer={ poseIncrementer } button={true}/> :
            <VoiceDetection startSequence={ startSequence } button={false} /> } */}
        </div>
        { state.pageView && <>
          <VideoPlayer video={currentPose.video} delay={2500} />

          <div className="pose-cam-container animate__animated animate__fadeIn animate__slower animate__delay-2s">
            <div className="overlay">
              <img src={currentPose.overlay} alt="overlay" style={{opacity: 0.75}} />
            </div>

              <div id="video-container">
                <center>
                <Webcam
                  style = { { width: 'auto', height: '99vh', } }
                  mirrored         = { true }
                  audio            = { false }
                  width            = { 1280 }
                  height           = { 720 }
                  videoConstraints = { videoConstraints }
                />
                </center>
              </div>
            </div></> }
      </div>
    );
}
