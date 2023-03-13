import React from "react";
import logo from "../assets/logo1.svg";
import home from "../assets/home.svg";
import book from "../assets/book.svg";
import love from "../assets/love.svg";
import close from "../assets/close.svg";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isVisible, setIsVisible }) => {
  const { pathname } = useLocation();
  const handleNotVisible = () => {
    setIsVisible(false);
  };
  console.log(isVisible);
  return (
    <>
      {isVisible ? (
        <div className="burger_menu">
          <div className="sideBar_block">
            <div className="burger_logos">
              <img className="main_logo" src={logo} alt="Логотип" />
              <img
                onClick={handleNotVisible}
                src={close}
                className="sideBar_routes-list_logo"
                alt="close burger"
              />
            </div>
            <ul className="sideBar_routes">
              {pathname == "/" ? (
                <Link style={{ textDecoration: "none" }} to="/">
                  <li className="active">
                    <img
                      className="sideBar_routes-list_logo"
                      src={home}
                      alt="Main"
                    />
                    Главная
                  </li>
                </Link>
              ) : (
                <Link style={{ textDecoration: "none" }} to="/">
                  <li className="sideBar_routes-list">
                    <img
                      className="sideBar_routes-list_logo"
                      src={home}
                      alt="Main"
                    />
                    Главная
                  </li>
                </Link>
              )}
              {pathname == "/musics" ? (
                <Link style={{ textDecoration: "none" }} to="/musics">
                  <li className="active">
                    <img
                      className="sideBar_routes-list_logo"
                      src={book}
                      alt="Main"
                    />
                    Медиатека
                  </li>
                </Link>
              ) : (
                <Link style={{ textDecoration: "none" }} to="/musics">
                  <li className="sideBar_routes-list">
                    <img
                      className="sideBar_routes-list_logo"
                      src={book}
                      alt="Main"
                    />
                    Медиатека
                  </li>
                </Link>
              )}
            </ul>
          </div>
          <div className="sideBar_block-bottom">
            <img className="sideBar_routes-list_logo" src={love} alt="Main" />
            Для тебя
          </div>
        </div>
      ) : null}
      <div className="sideBar">
        <div className="sideBar_block">
          <img className="main_logo" src={logo} alt="Логотип" />
          <ul className="sideBar_routes">
            {pathname == "/" ? (
              <Link style={{ textDecoration: "none" }} to="/">
                <li className="active">
                  <img
                    className="sideBar_routes-list_logo"
                    src={home}
                    alt="Main"
                  />
                  Главная
                </li>
              </Link>
            ) : (
              <Link style={{ textDecoration: "none" }} to="/">
                <li className="sideBar_routes-list">
                  <img
                    className="sideBar_routes-list_logo"
                    src={home}
                    alt="Main"
                  />
                  Главная
                </li>
              </Link>
            )}
            {pathname == "/musics" ? (
              <Link style={{ textDecoration: "none" }} to="/musics">
                <li className="active">
                  <img
                    className="sideBar_routes-list_logo"
                    src={book}
                    alt="Main"
                  />
                  Медиатека
                </li>
              </Link>
            ) : (
              <Link style={{ textDecoration: "none" }} to="/musics">
                <li className="sideBar_routes-list">
                  <img
                    className="sideBar_routes-list_logo"
                    src={book}
                    alt="Main"
                  />
                  Медиатека
                </li>
              </Link>
            )}
          </ul>
        </div>
        <div className="sideBar_block-bottom">
          <img className="sideBar_routes-list_logo" src={love} alt="Main" />
          Для тебя
        </div>
      </div>
    </>
  );
};

export default Sidebar;
