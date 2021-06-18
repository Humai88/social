import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import { Route } from "react-router-dom";
import { RootStateType } from "./redux/state";

type PropsType = {
  state: RootStateType;
};

function App({ state }: PropsType) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className="app-class-content">
        <Route
          path="/profile"
          render={() => <Profile data={state.prifilePage} />}
        />
        <Route
          path="/dialogs"
          render={() => <Dialogs data={state.messagePage} />}
        />
        <Route path="/news" render={() => <News />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/music" render={() => <Music />} />
      </div>
    </div>
  );
}

export default App;
