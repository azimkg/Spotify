import React from "react";
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import book from "../assets/book.svg";
import search from "../assets/search.svg";
import love from "../assets/love.svg";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sideBar_block">
        <img className="main_logo" src={logo} alt="Логотип" />
        <ul className="sideBar_routes">
          <li className="sideBar_routes-list">
            <img className="sideBar_routes-list_logo" src={home} alt="Main" />
            Главная
          </li>
          <li className="sideBar_routes-list">
            <img className="sideBar_routes-list_logo" src={search} alt="Main" />
            Поиск
          </li>
          <li className="sideBar_routes-list">
            <img className="sideBar_routes-list_logo" src={book} alt="Main" />
            Моя медиатека
          </li>
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
