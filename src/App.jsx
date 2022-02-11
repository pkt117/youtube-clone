import React, { useState, useEffect, useCallback } from "react";
import styles from "./App.module.css";
import Header from "./components/header/header";
import VideoList from "./components/video_list/video_list";
import VideoDetail from "./components/video_detail/video_detail";

const App = ({ youtube }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  const onSearch = useCallback(
    (value) => {
      youtube.search(value).then((item) => {
        setVideos(item);
      });
      setSelectedVideo(null);
    },
    [youtube]
  );

  const onVideoClick = useCallback((video) => {
    setSelectedVideo(video);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    youtube.popular().then((item) => {
      setVideos(item);
    });
  }, [youtube]);

  return (
    <section className={styles.container}>
      <Header onSearch={onSearch} />

      <div className={styles.videoContainer}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail videoData={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            display={selectedVideo ? "list" : "grid"}
            videoClick={onVideoClick}
            videos={videos}
          />
        </div>
      </div>
    </section>
  );
};

export default App;
