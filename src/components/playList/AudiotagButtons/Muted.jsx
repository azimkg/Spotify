import React from "react";
import notvol from "../../../assets/notVol.svg";
import volumes from "../../../assets/volume.svg";

const Muted = ({ isMuted, setIsMuted, handleVolumeChange, volume }) => {
  const hadndleVolomeMut = () => {
    setIsMuted(!isMuted);
  };
  return (
    <>
      {isMuted ? (
        <div className="down_block_div">
          <img
            className="down_block-top_vol"
            onClick={hadndleVolomeMut}
            src={notvol}
            alt="volume"
          />
          <input
            className="down_block-top_volume"
            type="range"
            min={0}
            max={1}
            step="any"
            value={0}
            onChange={handleVolumeChange}
          />
        </div>
      ) : (
        <div className="down_block_div">
          <img
            className="down_block-top_vol"
            onClick={hadndleVolomeMut}
            src={volumes}
            alt="volume"
          />
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
      )}
    </>
  );
};

export default Muted;
