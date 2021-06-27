import React, { Fragment } from "react";
import { MessageType } from "./../../../../redux/state";

export const MessageItem: React.FC<MessageType> = ({ text }) => {
  return (
    <Fragment>
      <p>{text}</p>
    </Fragment>
  );
};
