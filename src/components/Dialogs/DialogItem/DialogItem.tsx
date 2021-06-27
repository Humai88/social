import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.scss";

type PropsType = {
  name: string;
  id: number;
  image: string;
};

const DialogItem: React.FC<PropsType> = ({ name, id, image }) => {
  return (
    <div className={styles.dialog}>
      <img className={styles.img} src={image} alt="avatar"></img>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
