import React from "react";
import info from "../../assets/info.svg";
import like from "../../assets/favorite.svg";

const PlayList = ({ item, setIsElem, setIsVisible, isEqualizer }) => {
  let array = item.artist.split("");
  let artist = array.slice(0, 17).join("");
  return (
    <div className="playList_block" style={{ background: `${item.color2}` }}>
      <div
        className="playList_block1"
        onClick={() => {
          setIsElem(item.id);
          setIsVisible(true);
        }}
      >
        <h2 className="playList_block-num">{item.id}</h2>
        {isEqualizer === item.id ? (
          <div class="container_bar">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        ) : null}

        <img src={item.img} alt="image" className="playList_block-img" />
        <div className="playList_block-div">
          <h4 className="playList_block-title">{item.title}</h4>
          <p className="playList_block-artist">{item.artist}</p>
          <p className="playList_block-artist-mobile">{artist}</p>
        </div>
      </div>
      <div className="flex">
        <img src={like} alt="svg" className="playList_block-svg" />
        <img src={info} alt="info" className="playList_block-svg" />
      </div>
    </div>
  );
};

export default PlayList;
