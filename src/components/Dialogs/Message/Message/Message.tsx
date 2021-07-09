import React, { Fragment } from "react";
import { MessageType } from "./../../../../redux/dialogsReducer";
import styles from "./Message.module.scss";

export const Message: React.FC<MessageType> = ({ text }) => {
  return (
    <Fragment>
      <p className={styles.message}>{text}</p>
    </Fragment>
  );
};
