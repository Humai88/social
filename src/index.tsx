import store, { RootStateType } from "./redux/store";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export const renderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
