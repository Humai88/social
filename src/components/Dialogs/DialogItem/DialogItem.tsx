import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

// type DialogType = {
//   name: string;
//   id: number;
// };

// type PropsType = {
//   dialogs: DialogType[];
// };
type PropsType = {
  name: string;
  id: number;
};

const DialogItem = ({ name, id }: PropsType) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
