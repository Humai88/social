import React from "react";
import s from "./Avatar.module.css";

export const Avatar = () => {
  return (
    <div className={s.avatar__wrapper}>
      <img
        className={s.avatar}
        src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
        alt=""
      />
    </div>
  );
};
