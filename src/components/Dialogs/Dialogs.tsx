import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = () => {
  const dialogsData = [
    { id: 1, name: "Ann" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Nick" },
    { id: 4, name: "Max" },
    { id: 5, name: "Kate" },
  ];

  let dialogsElements = dialogsData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  const messagesData = [
    { id: 1, text: "Hi" },
    { id: 2, text: "How are you?" },
    { id: 3, text: "Fine, thanks" },
  ];
  let messagesElements = messagesData.map((m) => (
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
