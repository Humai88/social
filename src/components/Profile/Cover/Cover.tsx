import React from "react";
import s from "./Cover.module.scss";
import { Avatar } from "./Avatar/Avatar";
import { Info } from "./Info/Info";

export const Cover = () => {
  return (
    <div className={s.wrapper}>
      <Avatar />
      <Info />
    </div>
  );
};
