import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.svg";

const AllCategories = ({ item }) => {
  return (
    <div className="categories">
      <div className="categories_card">
        <img className="categories_card-img" src={item.img} alt="image" />
        <Link to="/musics">
          <img className="display_icon" src={icon} alt="play" />
        </Link>
        <div className="categories_card-block">
          <h4 className="categories_card-title">{item.title}</h4>
          <p className="categories_card-desc">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
