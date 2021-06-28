import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.scss";
import { Message } from "./Message/Message/Message";
import { AddMessage } from "./Message/AddMessage";
import { DialogType } from "./../../redux/state";
import { MessageType, messagePageType } from "./../../redux/state";
import { ActionDialogsTypes } from "./../../redux/dialogsReducer";

type PropsType = {
  data: messagePageType;
  dispatch: (action: ActionDialogsTypes) => void;
};

export const Dialogs: React.FC<PropsType> = ({ data, dispatch }) => {
  let dialogsElements = data.dialogs.map((d: DialogType) => (
    <DialogItem image={d.image} key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = data.messages.map((m: MessageType) => (
    <Message key={m.id} text={m.text} id={m.id} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{dialogsElements}</div>
      <div>
        <div className={styles.messages}>{messagesElements}</div>
        <AddMessage dispatch={dispatch} newMessageText={data.newMessageText} />
      </div>
    </div>
  );
};
