import React from "react";
import s from "./Message.module.css";

type PropsType = {
  text: string;
  id: number;
};
const Message: React.FC<PropsType> = ({ text }) => {
  return <div className={s.message}>{text}</div>;
};

export default Message;
