import React from "react";

const AboutMusic = ({ item }) => {
  let array = item.artist.split("");
  let artist = array.slice(0, 17).join("");
  return (
    <>
      <div className="down_block-music">
        <img src={item.img} className="down_block-music_img" alt="image" />
        <div className="down_block-music_titles">
          <h4 className="down_block-music_titles-name">{item.title}</h4>
          <p className="down_block-music_titles-artist">{item.artist}</p>
          <p className="down_block-music_titles-artist_mobile">{artist}...</p>
        </div>
      </div>
    </>
  );
};

export default AboutMusic;
