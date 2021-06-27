import React, { ChangeEvent } from "react";
import styles from "./AddMessage.module.scss";
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

export const AddMessage: React.FC<PropsType> = ({
  newMessageText,
  dispatch,
}) => {
  const onClickHandler = () => {
    dispatch(addMessageAC());
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateNewMessageTextAC(e.currentTarget.value));
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
        send
      </Button>
    </div>
  );
};
