// import ReactPlayer from "react-player";
import React from "react";
import Webcam from "react-webcam"

export default function Session(props) {

  const videoConstraints = {
    width: { min: 1280 },
    height: { min: 720 },
  };


  return (
    <div id="container">

      <Webcam
        audio={false}
        width={1920}
        height={1080}
        videoConstraints={videoConstraints}
      />

      {/* <div className="video-embed">

        <ReactPlayer
          url="https://www.youtube.com/watch?v=QH2-TGUlwu4"
        />
      </div> */}
    </div>
  );
}
