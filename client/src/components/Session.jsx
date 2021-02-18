import ReactPlayer from "react-player";
import React from "react";
import Webcam from "react-webcam"
import axios from "axios";
import "./Session.scss"
import VoiceDetection from './VoiceDetection';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



let counter = 0
export default function Session(props) {

  const [state, setState] = useState({
    poseArray : [],
    currentPose: {},
    pageView: false
  })
  let { id } = useParams();
  let poseArray = [];

  const startSequence = () => {
    setState(prev => ({...prev, pageView: true}))
  }

  const poseIncrementer = (direction) => {

    if (direction === 100) {
      if (counter >= state.poseArray.length - 1) { return; }
      counter++
      setState(prev => ({...prev, currentPose: state.poseArray[counter]}));
    } else if (direction === 200) {
      if (counter === 0) { return; }
      counter--
      setState(prev => ({...prev, currentPose: state.poseArray[counter]}));
    }
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/poses/build", {
        params: {
          session: id
        }
      })
    ]).then((all) => {
      setState(prev => ({...prev, poseArray: all[0].data, currentPose: all[0].data[0] }));
    })
  }, []);

  const videoConstraints = {
    facingMode: "user",
    width:  { min: 1280 },
    height: { min: 720 },
  };

  if (!state.pageView) {

    return (

      <div id="session" onload="setList(id)" className="animate__animated animate__fadeIn">
        <div className="voice-detection">
         <VoiceDetection
         startSequence={ startSequence } />
        </div>
      </div>

    )

  } else {

    return (

      <div id="session" onload="setList(id)" className="animate__animated animate__fadeIn">
        <div className="voice-detection">
         <VoiceDetection
         poseIncrementer={ poseIncrementer }/>
       </div>

        <div id="video-embed" className="video-embed animate__animated animate__fadeIn animate__slower animate__delay-3s">
          <ReactPlayer
            playing
            url={state.currentPose.video}
          />
        </div>

      <div className="pose-cam-container animate__animated animate__fadeIn animate__slower animate__delay-2s">
        <div className="overlay">
          <img src={state.currentPose.overlay} alt="overlay" style={{opacity: 0.75}} />
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
        </div>
      </div>
    );
  }
}
