import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
      <div>
        <NavLink to="/friends" activeClassName={s.active}>
          Friends
        </NavLink>
      </div>
    </nav>
  );
};
