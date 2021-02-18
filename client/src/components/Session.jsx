import ReactPlayer from "react-player";
import React from "react";
import Webcam from "react-webcam"
import axios from "axios";
import "./Session.scss"
import VoiceDetection from './VoiceDetection';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



export default function Session(props) {

  const [state, setState] = useState({
    poseArray : [],
    currentPose: {}
  })
  let { id } = useParams();

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

  return (

    <div id="session" className="animate__animated animate__fadeIn">

      <div className="voice-detection">
       <VoiceDetection />
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
        {/* <img src='https://i.imgur.com/xjorBOU.png' alt="overlay" style={{opacity: 0.75}} /> */}
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
        <div>
          <h1> !! {state.currentPose.video} !!</h1>

        </div>
      </div>
    </div>
  );
}
