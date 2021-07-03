import store from "./redux/reduxStore";
import { RootStateType } from "./redux/reduxStore";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export const renderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
renderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
