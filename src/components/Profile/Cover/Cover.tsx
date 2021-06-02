import React from "react";
import s from "./Cover.module.css";
import Avatar from "./Avatar/Avatar";
import Info from "./Info/Info";

const Cover = () => {
  return (
    <div className={s.wrapper}>
      <Avatar />
      <Info />
    </div>
  );
};

export default Cover;
