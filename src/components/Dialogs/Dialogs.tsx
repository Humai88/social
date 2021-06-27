import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.scss";
import { MessageItem } from "./Message/MessageItem/MessageItem";
import { Message } from "./Message/Message";
import { DialogType } from "./../../redux/state";
import { MessageType, messagePageType, ActionTypes } from "./../../redux/state";

type PropsType = {
  data: messagePageType;
  dispatch: (action: ActionTypes) => void;
};

export const Dialogs: React.FC<PropsType> = ({ data, dispatch }) => {
  let dialogsElements = data.dialogs.map((d: DialogType) => (
    <DialogItem image={d.image} key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = data.messages.map((m: MessageType) => (
    <MessageItem key={m.id} text={m.text} id={m.id} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{dialogsElements}</div>
      <div>
        <div className={styles.messages}>{messagesElements}</div>
        <Message dispatch={dispatch} newMessageText={data.newMessageText} />
      </div>
    </div>
  );
};
