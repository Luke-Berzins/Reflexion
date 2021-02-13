// import ReactPlayer from "react-player";

export default function Session(props) {

  return (
    <div id="container">

      <video id="video" width="1024" height="768"></video>
      <script src="js/video.js" type="text/javascript"></script>
      {/* <div className="video-embed">

        <ReactPlayer
          url="https://www.youtube.com/watch?v=QH2-TGUlwu4"
        />
      </div> */}
    </div>
  );
}
