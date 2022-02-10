import React from "react";
import styles from "./video_item.module.css";

const VideoItem = (props) => {
  const location = props.list.snippet;

  const onVideoClick = () => props.onVideoClick(props.list);
  const displayType = props.display === "list" ? styles.list : styles.grid;
  return (
    <li className={`${styles.box}  ${displayType}`}>
      <button className={styles.video} onClick={onVideoClick}>
        <img
          src={location.thumbnails.medium.url}
          alt="thumbnail"
          className={styles.thumbnail}
        />
        <p className={styles.description}>
          <span className={styles.title}>{location.title}</span>
          <span className={styles.channel}>{location.channelTitle}</span>
        </p>
      </button>
    </li>
  );
};

export default VideoItem;
