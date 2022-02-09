import React, { useEffect, useState } from "react";
import * as Youtube from "../../fetch/youtube.js";
import Video_item from "../video_item/video_item";
import style from "./video_list.module.css";

const Video_list = (props) => {
  const [popular_list, setPopular_list] = useState([]);
  useEffect(() => {
    if (props.onSearchValue == "") {
      Youtube.list_update().then((item) => {
        setPopular_list(item);
      });
    } else {
      Youtube.list_search(props.onSearchValue).then((item) => {
        setPopular_list(item);
      });
    }
  }, [, props.onSearchValue]);

  const onVideoClick = (video) => {
    props.onVideoClick(video);
  };

  return (
    <ul className={style.videoBox}>
      {popular_list.map((item) => {
        return (
          <Video_item onVideoClick={onVideoClick} list={item} key={item.etag} />
        );
      })}
    </ul>
  );
};

export default Video_list;
