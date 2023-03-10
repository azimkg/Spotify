import React from "react";
import info from "../../assets/info.svg";
import like from "../../assets/favorite.svg";

const PlayList = ({ item, setIsElem, setIsVisible }) => {
  return (
    <div className="playList_block" style={{ background: `${item.color2}` }}>
      <div
        className="playList_block1"
        onClick={() => {
          setIsElem(item.id);
          setIsVisible(true);
        }}
      >
        <img src={item.img} alt="image" className="playList_block-img" />
        <div className="playList_block-div">
          <h4 className="playList_block-title">{item.title}</h4>
          <p className="playList_block-artist">{item.artist}</p>
        </div>
      </div>
      <div className="playList_block1">
        <img src={like} alt="svg" className="playList_block-svg" />
        <img src={info} alt="info" className="playList_block-svg" />
      </div>
    </div>
  );
};

export default PlayList;
