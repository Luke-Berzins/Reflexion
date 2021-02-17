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


export default function Session(props) {

  let { id } = useParams();

  axios.get("/api/sequence_pose/build", {
    params: {
      session: id
    }
  }).then(res => {
    const poseList = res.data.map(object => {
      return object.pose_id
    })
    return poseList;
  }).then(result => {
    console.log(result, "res")
    axios.get("/api/poses/build", {
      params: {
        session: result
      }
    }).then(response => {
      console.log("ordered list from DB", response.data)
    })
  }).catch(error => {
    console.log(error)
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
