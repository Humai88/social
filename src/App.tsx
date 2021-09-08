import { Navigation } from "./components/Navigation/Navigation";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { Route, withRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Component, Fragment } from "react";
import styles from "./App.module.scss";
import Login from "./components/Login/Login";
import { Settings } from "./components/Settings/Settings";
import { Music } from "./components/Music/Music";
import { Friends } from "./components/Friends/Friends";
import { compose } from "redux";
import { connect } from "react-redux";
import { AppStateType, initializationThunkCreator } from "./redux/appReducer";
import { RootStateType } from "./redux/reduxStore";
import { Preloader } from "./common/Preloader/Preloader";

class App extends Component<MapDispatchType> {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initializeApp) {
      return <Preloader />;
    }
    return (
      <Fragment>
        <HeaderContainer />
        <div className={styles.mainWrapper}>
          <Navigation />
          <main className={styles.content}>
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/friends" render={() => <Friends />} />
            <Route path="/settings" render={() => <Settings />} />
          </main>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootStateType): AppStateType => ({
  initialized: state.app.initialized,
});

export default compose<React.ComponentClass>(
  connect(mapStateToProps, {
    initializeApp: initializationThunkCreator,
  }),
  withRouter
)(App);

// Types
type MapDispatchType = {
  initializeApp: () => void;
};
