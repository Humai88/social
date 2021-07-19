import "./App.scss";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Profile } from "./components/Profile/Profile";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
// import { News } from "./components/News/News";
// import { Settings } from "./components/Settings/Settings";
// import { Music } from "./components/Music/Music";
// import { Friends } from "./components/Friends/Friends";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div className="app-class-content">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        {/* <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/friends" render={() => <Friends />} />
        <Route path="/settings" render={() => <Settings />} /> */}
      </div>
    </div>
  );
}

export default App;
