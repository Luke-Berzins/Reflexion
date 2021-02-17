import ReactPlayer from "react-player";
import React from "react";
import Webcam from "react-webcam"
import axios from "axios";
import "./Session.scss"
import { urlParams } from "react";

export default function Session(props) {

 let { sessionID } = urlParams()

  axios.get("/api/sequence_pose/build", {
    params: {
      session: sessionID
    }
  })

  const videoConstraints = {
    facingMode: "user",
    width:  { min: 1280 },
    height: { min: 720 },
  };

  return (
    <div id="session" className="animate__animated animate__fadeIn">
      <div id="video-embed" className="video-embed animate__animated animate__fadeIn animate__slower animate__delay-3s">
        <ReactPlayer
          playing
          url="https://www.youtube.com/watch?v=Fr5kiIygm0c"
        />
      </div>

    <div className="pose-cam-container animate__animated animate__fadeIn animate__slower animate__delay-2s">

      <div className="overlay">
        <img src="https://i.imgur.com/ApU8PwB.png" alt="overlay" style={{opacity: 0.75}} />
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
