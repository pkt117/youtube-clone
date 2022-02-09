import React, { useState, useEffect } from "react";
import style from "./App.module.css";
import Header from "./components/header/header";
import Video_list from "./components/video_list/video_list";
import Video_detail from "./components/video_detail/video_detail";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [videoInfo, setVideoInfo] = useState(null);

  const onSearch = (value) => {
    setSearchValue(value);
    setVideoInfo(null);
  };

  const onVideoClick = (video) => {
    setVideoInfo(video);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // useEffect(() => {}, [videoInfo]);
  return (
    <section className={style.container}>
      <Header onSearch={onSearch} />
      {videoInfo == null ? (
        <Video_list onSearchValue={searchValue} onVideoClick={onVideoClick} />
      ) : (
        <div className={style.detailScreen}>
          <Video_detail videoData={videoInfo} />
          <Video_list onSearchValue={searchValue} onVideoClick={onVideoClick} />
        </div>
      )}
    </section>
  );
};

export default App;
