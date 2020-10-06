import React from "react";

function VideoItem(props) {
  return (
    <div className="media" onClick={()=>props.selectVideo(props.video)}>
      <img
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.title}
      />
      <div className="media-body">
        <h5 className="mt-0">{props.video.snippet.title}</h5>
        {props.video.snippet.description}
      </div>
    </div>
  );
}

export default VideoItem;
