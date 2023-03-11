import React from "react";
import like from "../../assets/likes.svg";

const PlayListAuthor = ({ item, isElem }) => {
  console.log(item);
  return (
    <>
      {isElem === item.id ? (
        <div
          className="play_listAuthor-block"
          style={{
            background: `linear-gradient(${item.color1},${item.color2})`,
          }}
        >
          <img
            className="play_listAuthor-block_img"
            src={item.img}
            alt="song"
          />
          <div className="play_listAuthor-block_right">
            <p className="play_listAuthor-block_text">Плейлист</p>
            <h2 className="play_listAuthor-block_title">{item.title}</h2>
            <p className="play_listAuthor-block_text grey">
              {item.description}
            </p>
            {item.likes.length < 0 ? (
              <span className="play_listAuthor-block_text">
                <img className="playList_block-svg" src={like} alt="like" />
                {item.likes.length}
              </span>
            ) : (
              <span className="play_listAuthor-block_text">
                <img className="playList_block-svg" src={like} alt="like" />
              </span>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PlayListAuthor;
