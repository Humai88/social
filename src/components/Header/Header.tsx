import React from "react";
import logo from "../../img/logo.png";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <img className={s.logo} src={logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
