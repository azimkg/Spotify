import React from "react";
import logo from "../assets/logo1.svg";
import home from "../assets/home.svg";
import book from "../assets/book.svg";
// import search from "../assets/search.svg";
import love from "../assets/love.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar_block">
        <img className="main_logo" src={logo} alt="Логотип" />
        <ul className="sideBar_routes">
          <Link style={{ textDecoration: "none" }} to="/">
            <li className="sideBar_routes-list">
              <img className="sideBar_routes-list_logo" src={home} alt="Main" />
              Главная
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/musics">
            <li className="sideBar_routes-list">
              <img className="sideBar_routes-list_logo" src={book} alt="Main" />
              Медиатека
            </li>
          </Link>
        </ul>
      </div>
      <div className="sideBar_block-bottom">
        <img className="sideBar_routes-list_logo" src={love} alt="Main" />
        Для тебя
      </div>
    </div>
  );
};

export default Sidebar;
