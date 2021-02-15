// import ReactPlayer from "react-player";
import React from "react";
import Webcam from "react-webcam"

import "./Session.scss"

export default function Session(props) {

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 7;

  const videoConstraints = {
    // width: { min: vw },
    // height: { min: vh },
    facingMode: "user"
  };


  return (
    <div id="video-container">

        <Webcam
          audio={ false }
          width={ vw }
          height={ vh }
          videoConstraints={ videoConstraints }
        />

      {/* <div className="video-embed">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=QH2-TGUlwu4"
        />
      </div> */}
    </div>
  );
}
