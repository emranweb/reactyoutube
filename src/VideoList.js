import React from "react";
import VideoItem from "./VideoItem";

function VideoList(props) {
  return (
    <div className="video-list-wrapper">
      {props.videos.map((item) => {
        return <VideoItem  selectVideo={props.selectVideo} key={item.id.videoId} video={item} />;
      })}
    </div>
  );
}

export default VideoList;
