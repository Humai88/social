import React from "react";
import { Dialogs } from "./Dialogs";
import { StoreType } from "../../redux/reduxStore";
import {
  addMessageAC,
  updateNewMessageTextAC,
} from "./../../redux/dialogsReducer";

type PropsType = {
  store: StoreType;
};

export const DialogsContainer: React.FC<PropsType> = ({ store }) => {
  let state = store.getState();

  const ddMessage = () => {
    store.dispatch(addMessageAC());
  };

  const updateNewMessage = (body: string) => {
    store.dispatch(updateNewMessageTextAC(body));
  };

  return (
    <Dialogs
      newMessageText={state.messagePage.newMessageText}
      data={state.messagePage}
      updateNewMessage={updateNewMessage}
      addMessage={ddMessage}
    />
  );
};
