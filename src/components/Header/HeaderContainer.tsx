import React from "react";
import { connect } from "react-redux";
import {
  AuthStateType,
  authThunkCreator,
  setAuthUserDataAC,
} from "../../redux/authReducer";
import { RootStateType } from "../../redux/reduxStore";
import { Header } from "./Header";
import { authAPI } from "../../api/api";

type mapDispatchType = {
  setAuthData: () => void;
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

export default connect(mapStateToProps, { setAuthData: authThunkCreator })(
  HeaderContainer
);
