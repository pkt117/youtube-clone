import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ display, videos, videoClick }) => {
  return (
    <ul className={styles.videoBox}>
      {videos.map((item) => {
        return (
          <VideoItem
            display={display}
            videoClick={videoClick}
            list={item}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

export default VideoList;
