import React from "react";
import menu from "../assets/menu.svg";

const Navbar = ({ setIsVisible }) => {
  const handleVisible = () => {
    setIsVisible(true);
  };
  return (
    <div className="navbar">
      <div className="navbar_block">
        <img
          className="burger_mobile"
          onClick={handleVisible}
          src={menu}
          alt="menu"
        />
        <div className="navbar_block2">
          <button className="button_signUp">Зарегистрироваться</button>
          <button className="button_signIn">Войти</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
