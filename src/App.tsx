import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import { BrowserRouter, Route } from "react-router-dom";
import { PostsDataType, DialogsDataType, MessageDataType } from "./index";

type PropsType = {
  posts: PostsDataType;
  dialogs: DialogsDataType;
  messages: MessageDataType;
};
function App({ posts, dialogs, messages }: PropsType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-class-content">
          <Route path="/profile" render={() => <Profile posts={posts} />} />
          <Route
            path="/dialogs"
            render={() => <Dialogs dialogs={dialogs} messages={messages} />}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/music" render={() => <Music />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
