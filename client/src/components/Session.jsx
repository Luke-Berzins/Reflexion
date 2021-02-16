import ReactPlayer from "react-player";
import React from "react";
import Webcam from "react-webcam"

import "./Session.scss"

export default function Session(props) {

  const videoConstraints = {
    facingMode: "user",
    width:  { min: 1280 },
    height: { min: 720 },
  };

  return (
    <div>
      <div id="video-embed" className="video-embed animate__animated animate__fadeIn animate__slower animate__delay-2s">
        <ReactPlayer
          playing
          url="https://www.youtube.com/watch?v=Fr5kiIygm0c"
        />
      </div>

    <div className="pose-cam-container animate__animated animate__fadeIn animate__slower animate__delay-0.5s">

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
