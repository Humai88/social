import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/img/logo.png";
import styles from "./Header.module.scss";

type HeaderPropsType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  setAuthData: (userId: number, email: string, login: string) => void;
};

export const Header: React.FC<HeaderPropsType> = ({ login, isAuth }) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.authWrapper}>
        {isAuth ? login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
