import React from "react";
import { MessageType } from "./../../../../redux/dialogsReducer";
import styles from "./Message.module.scss";

export const Message: React.FC<MessageType> = ({ text }) => {
  return (
    <div className={styles.messageWrapper}>
      <p className={styles.message}>{text}</p>
    </div>
  );
};
