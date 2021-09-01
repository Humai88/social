import React from "react";
import styles from "./Preloader.module.scss";
import loader from "./../../assets/img/three-dots.svg";

export const Preloader = () => {
  return <img className={styles.loader} src={loader} alt="loading" />;
};
