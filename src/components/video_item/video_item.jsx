import React from "react";
import style from "./video_item.module.css";

const Video_item = (props) => {
  const location = props.list.snippet;

  const onVideoClick = () => props.onVideoClick(props.list);
  return (
    <li className={style.box}>
      <button className={style.video} onClick={onVideoClick}>
        <img
          src={location.thumbnails.medium.url}
          alt="thumbnail"
          className={style.thumbnail}
        />
        <p className={style.description}>
          <span className={style.title}>{location.title}</span>
          <span className={style.channel}>{location.channelTitle}</span>
        </p>
      </button>
    </li>
  );
};

export default Video_item;
