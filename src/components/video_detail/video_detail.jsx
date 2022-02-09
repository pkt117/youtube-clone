import React from "react";
import style from "./video_detail.module.css";

const Video_detail = (props) => {
  const videoData = props.videoData;
  const id =
    typeof videoData.id == "string" ? videoData.id : videoData.id.videoId;
  let url = `https://www.youtube.com/embed/${id}`;
  return (
    <div id={style.detailBox}>
      <iframe
        id={style.videoPlayer}
        type="text/html"
        width="720"
        height="405"
        src={url}
        allowFullScreen
      />

      <h1>{videoData.snippet.title}</h1>
      <h3>{videoData.snippet.channelTitle}</h3>

      <p>{videoData.snippet.description}</p>
    </div>
  );
};

export default Video_detail;
