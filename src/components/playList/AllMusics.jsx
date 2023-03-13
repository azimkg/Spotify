import React, { useEffect, useRef, useState } from "react";
import AboutMusic from "./AudiotagButtons/AboutMusic";
import Muted from "./AudiotagButtons/Muted";
import PlayOrPauseButtons from "./AudiotagButtons/PlayOrPauseButtons";

const AllMusics = ({ item, isElem, setIsEqualizer, setIsElem, itemLength }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);
  const [duration, setDuration] = useState("");
  const [allTime, setAllTime] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  // const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    audioRef.current?.play();
    setIsEqualizer(isElem);
  }, [isElem]);

  const handleTimeUpdate = (e) => {
    const { current } = audioRef;
    getTimeFromMins2(current.currentTime);
    getTimeFromMins1(current.duration);
    setProgress(current.currentTime / current.duration);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsEqualizer("");
    } else {
      audioRef.current.play();
      setIsEqualizer(isElem);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setIsEqualizer("");
    if (isElem === itemLength) {
      return;
    }
    setIsElem(isElem + 1);
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
            muted={isMuted}
          />
          <div className="down_block-main">
            <AboutMusic item={item} />
            <PlayOrPauseButtons
              togglePlay={togglePlay}
              allTime={allTime}
              duration={duration}
              progress={progress}
              handleEnded={handleEnded}
              isPlaying={isPlaying}
              setIsElem={setIsElem}
              isElem={isElem}
              itemLength={itemLength}
            />
            <Muted
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              volume={volume}
              handleVolumeChange={handleVolumeChange}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AllMusics;
