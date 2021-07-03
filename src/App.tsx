import React from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Profile } from "./components/Profile/Profile";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { News } from "./components/News/News";
import { Settings } from "./components/Settings/Settings";
import { Music } from "./components/Music/Music";
import { Friends } from "./components/Friends/Friends";
import { Route } from "react-router-dom";
import { StoreType } from "./redux/reduxStore";

type PropsType = {
  store: StoreType;
};

function App({ store }: PropsType) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className="app-class-content">
        <Route path="/profile" render={() => <Profile store={store} />} />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer store={store} />}
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
