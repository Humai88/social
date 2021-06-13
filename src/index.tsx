import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export type PostType = {
  id: number;
  post: string;
  likes: number;
};
export type PostsDataType = Array<PostType>;

let postsData = [
  { id: 1, post: "Hi, Gumay", likes: 7 },
  { id: 2, post: "How are you?", likes: 9 },
  { id: 3, post: "Fine, thanks", likes: 15 },
];

export type DialogType = {
  id: number;
  name: string;
};
export type DialogsDataType = Array<DialogType>;

let dialogsData = [
  { id: 1, name: "Ann" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Nick" },
  { id: 4, name: "Max" },
  { id: 5, name: "Kate" },
];

export type MessageType = {
  id: number;
  text: string;
};
export type MessageDataType = Array<MessageType>;

let messagesData = [
  { id: 1, text: "Hi" },
  { id: 2, text: "How are you?" },
  { id: 3, text: "Fine, thanks" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData} />
  </React.StrictMode>,
  document.getElementById("root")
);
