import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  AuthStateType,
  authThunkCreator,
  logoutThunkCreator,
} from "../../redux/authReducer";
import { RootStateType } from "../../redux/reduxStore";
import { Header } from "./Header";

type mapDispatchType = {
  setAuthData: () => void;
  logout: () => void;
};

export type AuthPropsType = AuthStateType & mapDispatchType;

class HeaderContainer extends React.Component<AuthPropsType> {
  componentDidMount() {
    this.props.setAuthData();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: RootStateType): AuthStateType => ({
  id: state.auth.id,
  email: state.auth.email,
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentClass>(
  connect(mapStateToProps, {
    setAuthData: authThunkCreator,
    logout: logoutThunkCreator,
  })
)(HeaderContainer);
