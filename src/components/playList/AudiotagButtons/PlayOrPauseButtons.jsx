import React from "react";
import play from "../../../assets/play.svg";
import pause from "../../../assets/pause.svg";
import next from "../../../assets/next.svg";
import prev from "../../../assets/prev.svg";

const PlayOrPauseButtons = ({
  togglePlay,
  allTime,
  duration,
  isPlaying,
  handleEnded,
  progress,
  setIsElem,
  isElem,
  itemLength,
}) => {
  const prevMusic = () => {
    if (isElem === 1) {
      return;
    }
    setIsElem(isElem - 1);
  };
  const nextMusic = () => {
    if (isElem === itemLength) {
      return;
    }
    setIsElem(isElem + 1);
  };

  return (
    <>
      <div className="down_block-center">
        <div className="down_block-top">
          <img src={prev} onClick={prevMusic} alt="prevAudio" width={28} />
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
          <img src={next} onClick={nextMusic} alt="nextAudio" width={32} />
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
    </>
  );
};

export default PlayOrPauseButtons;
