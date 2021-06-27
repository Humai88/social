import React from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { News } from "./components/News/News";
import { Settings } from "./components/Settings/Settings";
import { Music } from "./components/Music/Music";
import { Friends } from "./components/Friends/Friends";
import { Route } from "react-router-dom";
import { RootStateType } from "./redux/state";

type PropsType = {
  state: RootStateType;
  addPostCallback: (newPostText: string) => void;
  updatePostTextCallback: (postText: string) => void;
};

function App({ state, addPostCallback, updatePostTextCallback }: PropsType) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className="app-class-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              updatePostTextCallback={updatePostTextCallback}
              data={state.prifilePage}
              addPostCallback={addPostCallback}
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => <Dialogs data={state.messagePage} />}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/friends" render={() => <Friends />} />
      </div>
    </div>
  );
}

export default App;
