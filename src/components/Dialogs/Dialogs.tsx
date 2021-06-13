import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { DialogsDataType, DialogType } from "./../../index";
import { MessageDataType, MessageType } from "./../../index";

type PropsType = {
  dialogs: DialogsDataType;
  messages: MessageDataType;
};

const Dialogs: React.FC<PropsType> = ({ dialogs, messages }) => {
  let dialogsElements = dialogs.map((d: DialogType) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m: MessageType) => (
    <Message key={m.id} text={m.text} id={m.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.items}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
