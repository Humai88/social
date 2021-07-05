import React, { useContext } from "react";
import { Dialogs } from "./Dialogs";
import { StoreType } from "../../redux/reduxStore";
import {
  addMessageAC,
  updateNewMessageTextAC,
} from "./../../redux/dialogsReducer";
import { StoreContext } from "../../storeContext";

export const DialogsContainer = () => {
  const ctx: StoreType = useContext(StoreContext);
  let state = ctx.getState();

  const ddMessage = () => {
    ctx.dispatch(addMessageAC());
  };

  const updateNewMessage = (body: string) => {
    ctx.dispatch(updateNewMessageTextAC(body));
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
