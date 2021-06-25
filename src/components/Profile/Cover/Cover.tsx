import React from "react";
import styles from "./Cover.module.scss";
import { Avatar } from "./Avatar/Avatar";
import { Info } from "./Info/Info";

export const Cover = () => {
  return (
    <div className={styles.wrapper}>
      <Avatar />
      <Info />
    </div>
  );
};
