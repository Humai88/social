import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

type PropsType = {
  name: string;
  id: number;
};

const DialogItem: React.FC<PropsType> = ({ name, id }) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
