import React, { ChangeEvent } from "react";
import styles from "./Message.module.scss";
import { Button } from "../../UI/Button/Button";

import {
  ActionTypes,
  addMessageAC,
  updateNewMessageTextAC,
} from "../../../redux/state";

type PropsType = {
  newMessageText: string;

  dispatch: (action: ActionTypes) => void;
};

export const Message: React.FC<PropsType> = ({ newMessageText, dispatch }) => {
  const onClickHandler = () => {
    dispatch(addMessageAC());
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateNewMessageTextAC(e.currentTarget.value));
    newMessageText = "";
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        onChange={onChangeHandler}
        className={styles.textArea}
        value={newMessageText}
        placeholder="Write a message..."
      ></textarea>
      <Button onClick={onClickHandler} className={styles.btn}>
        add post
      </Button>
    </div>
  );
};
