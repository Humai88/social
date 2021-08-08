import { Navigation } from "./components/Navigation/Navigation";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Fragment } from "react";
import styles from "./App.module.scss";
import { Login } from "./components/Login/Login";
// import { News } from "./components/News/News";
// import { Settings } from "./components/Settings/Settings";
// import { Music } from "./components/Music/Music";
// import { Friends } from "./components/Friends/Friends";

function App() {
  return (
    <Fragment>
      <HeaderContainer />
      <div className={styles.mainWrapper}>
        <Navigation />
        <div className={styles.content}>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
          {/* <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/friends" render={() => <Friends />} />
        <Route path="/settings" render={() => <Settings />} /> */}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
