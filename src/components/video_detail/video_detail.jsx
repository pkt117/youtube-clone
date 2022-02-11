import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ videoData, videoData: { snippet } }) => {
  const id = videoData.id;
  let url = `https://www.youtube.com/embed/${id}`;
  return (
    <section id={styles.detail}>
      <iframe
        id={styles.videoPlayer}
        type="text/html"
        width="100%"
        height="500"
        src={url}
        allowFullScreen
      />

      <h1>{snippet.title}</h1>
      <h3>{snippet.channelTitle}</h3>

      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
