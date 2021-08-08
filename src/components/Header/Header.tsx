import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "../UI/Avatar/Avatar";
import logo from "./../../assets/img/logo.png";
import styles from "./Header.module.scss";

type HeaderPropsType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;

  setAuthData: () => void;
};

export const Header: React.FC<HeaderPropsType> = (props) => {
  const { login, isAuth } = props;
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.authWrapper}>
        <Avatar
          className={styles.avatar}
          src="https://image.flaticon.com/icons/png/512/1077/1077275.png"
        />
        {isAuth ? (
          <span className={styles.login}>{login}</span>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
