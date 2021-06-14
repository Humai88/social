import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { DialogType } from "./../../redux/state";
import { MessageType, messagePageType } from "./../../redux/state";

type PropsType = {
  data: messagePageType;
};

const Dialogs: React.FC<PropsType> = ({ data }) => {
  let dialogsElements = data.dialogs.map((d: DialogType) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = data.messages.map((m: MessageType) => (
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
