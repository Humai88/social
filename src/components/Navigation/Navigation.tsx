import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <NavLink to="/profile" activeClassName={styles.active}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={styles.active}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/users" activeClassName={styles.active}>
          Find friends
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" activeClassName={styles.active}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" activeClassName={styles.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
