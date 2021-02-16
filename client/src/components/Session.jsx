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
      <div className="overlay">
        <img src="https://i.imgur.com/ApU8PwB.png" alt="overlay" style={{opacity: 0.75}} />


      </div>

      <div id="video-embed" className="video-embed">
        <ReactPlayer
          playing="true"
          url="https://www.youtube.com/watch?v=Fr5kiIygm0c"
        />
      </div>

    <div id="video-container" className="animate__animated animate__fadeIn animate__slower">

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

  );
}
