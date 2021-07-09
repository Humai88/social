import store from "./redux/reduxStore";
import { RootStateType } from "./redux/reduxStore";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

export const renderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
renderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
