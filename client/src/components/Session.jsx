import ReactPlayer from "react-player";
import React from "react";
import Webcam from "react-webcam"
import axios from "axios";
import "./Session.scss"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import VoiceDetection from './VoiceDetection';


export default function Session(props) {

const dummyArr = [  {poseID: 1, overlay: 'https://i.imgur.com/ApU8PwB.png', video: 'https://www.youtube.com/watch?v=Fr5kiIygm0c' },
                    {poseID: 2, overlay: 'https://i.imgur.com/ApU8PwB.png', video: 'https://www.youtube.com/watch?v=Mn6RSIRCV3w' },
                    {poseID: 3, overlay: 'https://i.imgur.com/ApU8PwB.png', video: 'https://www.youtube.com/watch?v=NytDpa2r34g' } ];

//  let { sessionID } = urlParams()

  axios.get("/api/sequence_pose/build", {
    params: {
      session: id
    }
  }).then(res => {
    const poseList = res.data.map(object => {
      return object.pose_id
    })
    console.log(poseList)
    return poseList;
  })

  const videoConstraints = {
    facingMode: "user",
    width:  { min: 1280 },
    height: { min: 720 },
  };

  return (
    <div id="session" className="animate__animated animate__fadeIn">
      <VoiceDetection />
      <div id="video-embed" className="video-embed animate__animated animate__fadeIn animate__slower animate__delay-3s">
        <ReactPlayer
          playing
          url={`${dummyArr[2].video}`}
        />
      </div>

    <div className="pose-cam-container animate__animated animate__fadeIn animate__slower animate__delay-2s">

      <div className="overlay">
        <img src={`${dummyArr[2].overlay}`} alt="overlay" style={{opacity: 0.75}} />
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
