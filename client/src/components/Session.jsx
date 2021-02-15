// import ReactPlayer from "react-player";
import React from "react";
import Webcam from "react-webcam"

export default function Session(props) {

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 7;

  const videoConstraints = {
    width: { min: vw },
    height: { min: vh },
  };


  return (
    <div id="video-container">

      <Webcam
        audio={ true }
        width={ vw }
        height={ vh }
      />

      {/* <div className="video-embed">

        <ReactPlayer
          url="https://www.youtube.com/watch?v=QH2-TGUlwu4"
        />
      </div> */}
    </div>
  );
}
