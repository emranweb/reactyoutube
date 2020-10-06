import React from "react";

function FeatureVideo(props) {
  if (props.video === null) {
    return <h1>Video Loading</h1>
  }


  const videoURL = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  return (
    <div className="feature-video-wrapper">
       <iframe src={videoURL}  width="530px" height="400px" frameBorder="0" allowFullScreen></iframe>
       <div className="video info">
       <h3>{props.video.snippet.title}</h3>
       <p>{props.video.snippet.description}</p>
       </div>
    </div>
  );
}

export default FeatureVideo;
