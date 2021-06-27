import store, { RootStateType } from "./redux/state";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export const renderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPostCallback={store.addPost.bind(store)}
        updatePostTextCallback={store.updateNewPostText.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
