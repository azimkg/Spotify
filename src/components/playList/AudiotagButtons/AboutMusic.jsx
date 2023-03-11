import React from "react";

const AboutMusic = ({ item }) => {
  return (
    <>
      <div className="down_block-music">
        <img src={item.img} className="down_block-music_img" alt="image" />
        <div className="down_block-music_titles">
          <h4 className="down_block-music_titles-name">{item.title}</h4>
          <p className="down_block-music_titles-artist">{item.artist}</p>
        </div>
      </div>
    </>
  );
};

export default AboutMusic;
