import React from "react";
import styles from "./Cover.module.scss";
import { Info } from "./Info/Info";

export const Cover = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar__wrapper}>
        <img
          className={styles.avatar}
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </div>
      <Info />
    </div>
  );
};
