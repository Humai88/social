import React from "react";
import s from "./Message.module.css";
import { Button } from "./../../UI/Button/Button";

type PropsType = {
  text: string;
  id: number;
};
const Message: React.FC<PropsType> = ({ text }) => {
  let newMessageElement = React.createRef<HTMLTextAreaElement>();
  const addMessage = () => {
    const text = newMessageElement.current?.value;
    alert(text);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.message}>{text}</div>
      <textarea
        ref={newMessageElement}
        placeholder="Write a message..."
      ></textarea>
      <Button onClick={addMessage} className={s.btn}>
        add post
      </Button>
    </div>
  );
};

export default Message;
