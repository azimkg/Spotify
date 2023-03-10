import React, { useEffect, useRef, useState } from "react";
import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import next from "../../assets/next.svg";
import prev from "../../assets/prev.svg";
import volumes from "../../assets/volume.svg";

const AllMusics = ({ item, isElem }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);
  const [duration, setDuration] = useState("");
  const [allTime, setAllTime] = useState("");

  useEffect(() => {
    audioRef.current?.play();
  }, [isElem]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  function getTimeFromMins1(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = Math.round(mins % 60);
    return setDuration(hours + ":" + minutes);
  }

  function getTimeFromMins2(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = Math.round(mins % 60);
    return setAllTime(hours + ":" + minutes);
  }

  const handleTimeUpdate = () => {
    const { current } = audioRef;
    getTimeFromMins2(current.currentTime);
    getTimeFromMins1(current.duration);

    setProgress(current.currentTime / current.duration);
  };

  const handleVolumeChange = (event) => {
    const {
      target: { value },
    } = event;
    audioRef.current.volume = value;
    setVolume(value);
  };

  return (
    <>
      {isElem === item.id ? (
        <div
          className="down_block"
          style={{
            background: `linear-gradient(${item.color1},${item.color2})`,
          }}
        >
          <audio
            ref={audioRef}
            src={item.audio}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={handleEnded}
            onTimeUpdate={handleTimeUpdate}
          />
          <div className="down_block-main">
            <div className="down_block-music">
              <img
                src={item.img}
                className="down_block-music_img"
                alt="image"
              />
              <div className="down_block-music_titles">
                <h4 className="down_block-music_titles-name">{item.title}</h4>
                <p className="down_block-music_titles-artist">{item.artist}</p>
              </div>
            </div>
            <div className="down_block-center">
              <div className="down_block-top">
                <img src={prev} alt="prevAudio" width={28} />
                {isPlaying ? (
                  <img
                    src={pause}
                    onClick={togglePlay}
                    alt="play"
                    style={{ margin: "5px 20px" }}
                    width={30}
                  />
                ) : (
                  <img
                    src={play}
                    onClick={togglePlay}
                    style={{ margin: "5px 20px" }}
                    alt="pause"
                    width={30}
                  />
                )}
                <img src={next} alt="nextAudio" width={32} />
              </div>
              <div className="down_block-1">
                <span className="down_block-span">{allTime}</span>
                <input
                  type="range"
                  min={0}
                  step="any"
                  value={progress}
                  className="down_block-bottom"
                  max={1}
                  onChange={handleEnded}
                />
                <span className="down_block-span">{duration}</span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <img className="down_block-top_vol" src={volumes} alt="volume" />
              <input
                className="down_block-top_volume"
                type="range"
                min={0}
                max={1}
                step="any"
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AllMusics;
