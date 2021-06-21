import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost } from "./redux/state";
import { RootStateType, updateNewPostText } from "./redux/state";

export const renderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPostCallback={addPost}
        updatePostTextCallback={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
