import React from "react";
import { musics } from "../../helpers/musicData";
import AllCategories from "../mainPageComponents/AllCategories";

const Homepage = () => {
  return (
    <div className="musics_page back_color">
      {musics?.map((item) => (
        <AllCategories item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Homepage;
