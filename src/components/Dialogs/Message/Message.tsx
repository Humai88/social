import React from "react";
import styles from "./Message.module.scss";
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
    <div className={styles.wrapper}>
      <div className={styles.message}>{text}</div>
      <textarea
        className={styles.textArea}
        ref={newMessageElement}
        placeholder="Write a message..."
      ></textarea>
      <Button onClick={addMessage} className={styles.btn}>
        add post
      </Button>
    </div>
  );
};

export default Message;
