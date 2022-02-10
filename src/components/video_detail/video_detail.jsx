import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = (props) => {
  const videoData = props.videoData;
  const id = videoData.id;
  let url = `https://www.youtube.com/embed/${id}`;
  return (
    <div id={styles.detailBox}>
      <iframe
        id={styles.videoPlayer}
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

export default VideoDetail;
