import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "../../UI/Avatar/Avatar";

import styles from "./DialogItem.module.scss";

type PropsType = {
  name: string;
  id: string;
  image: string;
};

const DialogItem: React.FC<PropsType> = ({ name, id, image }) => {
  return (
    <div className={styles.dialog}>
      <Avatar src={image} />
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
