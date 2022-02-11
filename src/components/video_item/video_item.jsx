import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(({ list, list: { snippet }, display, videoClick }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <li className={`${styles.box}  ${displayType}`}>
      <button className={styles.video} onClick={() => videoClick(list)}>
        <img
          src={snippet.thumbnails.medium.url}
          alt="thumbnail"
          className={styles.thumbnail}
        />
        <p className={styles.description}>
          <span className={styles.title}>{snippet.title}</span>
          <span className={styles.channel}>{snippet.channelTitle}</span>
        </p>
      </button>
    </li>
  );
});

export default VideoItem;
