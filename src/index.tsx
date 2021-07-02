import store from "./redux/reduxStore";
import { profilePageType } from "./redux/profileReducer";
import { messagePageType } from "./redux/dialogsReducer";
import { SidebarType } from "./redux/sidebarReducer";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export type RootStateType = {
  prifilePage: profilePageType;
  messagePage: messagePageType;
  sidebarPage: SidebarType;
};

export const renderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
