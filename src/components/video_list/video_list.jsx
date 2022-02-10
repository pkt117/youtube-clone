import React, { useEffect, useState } from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = (props) => {
  const onVideoClick = (video) => {
    props.onVideoClick(video);
  };

  return (
    <ul className={styles.videoBox}>
      {props.popularList.map((item) => {
        return (
          <VideoItem
            display={props.display}
            onVideoClick={onVideoClick}
            list={item}
            key={item.id}
            displayType={props.displayType}
          />
        );
      })}
    </ul>
  );
};

export default VideoList;
