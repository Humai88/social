import React from "react";
import s from "./Avatar.module.css";

const Avatar = () => {
  return (
    <div className={s.avatar__wrapper}>
      <img
        className={s.avatar}
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt=""
      />
    </div>
  );
};

export default Avatar;
