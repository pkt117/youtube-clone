import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Header from "./components/header/header";
import VideoList from "./components/video_list/video_list";
import VideoDetail from "./components/video_detail/video_detail";

const App = ({ youtube }) => {
  const [searchValue, setSearchValue] = useState("");
  const [videoInfo, setVideoInfo] = useState(null);
  const [popularList, setPopularList] = useState([]);

  const onSearch = (value) => {
    setSearchValue(value);
    setVideoInfo(null);
  };

  const onVideoClick = (video) => {
    setVideoInfo(video);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (searchValue == "") {
      youtube.popular().then((item) => {
        setPopularList(item);
      });
    } else {
      youtube.search(searchValue).then((item) => {
        setPopularList(item);
      });
    }
  }, [, searchValue]);

  return (
    <section className={styles.container}>
      <Header onSearch={onSearch} />

      <div className={styles.videoContainer}>
        {videoInfo && (
          <div className={styles.detail}>
            <VideoDetail videoData={videoInfo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            display={videoInfo ? "list" : "grid"}
            onSearchValue={searchValue}
            onVideoClick={onVideoClick}
            popularList={popularList}
          />
        </div>
      </div>
    </section>
  );
};

export default App;
