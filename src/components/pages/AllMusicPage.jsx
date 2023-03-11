import React, { useEffect, useState } from "react";
import AllMusics from "../playList/AllMusics";
import PlayListAuthor from "../playList/PlayListAuthor";
import { musics } from "../../helpers/musicData";
import PlayList from "../playList/PlayList";

const AllMusicPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isEqualizer, setIsEqualizer] = useState("");
  const [isElem, setIsElem] = useState("");
  console.log(isElem);
  return (
    <div className="musics_page">
      {isVisible
        ? musics?.map((item) =>
            item.data?.map((elem) => (
              <PlayListAuthor key={item.id} item={elem} isElem={isElem} />
            ))
          )
        : null}
      <div className="down_Playmusics">
        {musics?.map((item) =>
          item.data?.map((elem) => (
            <PlayList
              key={item.id}
              item={elem}
              setIsElem={setIsElem}
              setIsVisible={setIsVisible}
              isEqualizer={isEqualizer}
            />
          ))
        )}
      </div>
      <div className="down_musics">
        {isVisible
          ? musics?.map((item) =>
              item.data?.map((elem) => (
                <AllMusics
                  setIsEqualizer={setIsEqualizer}
                  key={item.id}
                  item={elem}
                  isElem={isElem}
                  setIsElem={setIsElem}
                  itemLength={item.data.length}
                />
              ))
            )
          : null}
      </div>
    </div>
  );
};

export default AllMusicPage;
