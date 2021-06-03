import React from "react";
import s from "./Message.module.css";
// type MessageType = {
//   text: string;
//   id: number;
// };

// type PropsType = {
//   messages: MessageType[];
// };

type PropsType = {
  text: string;
  id: number;
};
const Message = ({ text }: PropsType) => {
  return <div className={s.message}>{text}</div>;
};

export default Message;
