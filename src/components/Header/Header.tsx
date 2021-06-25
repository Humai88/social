import React from "react";
import logo from "../../img/logo.png";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <img className={s.logo} src={logo} alt="" />
      </div>
    </header>
  );
};
