import React from "react";
import { connect } from "react-redux";
import {
  AuthStateType,
  CreateAuthResponseType,
  setAuthUserDataAC,
} from "../../redux/authReducer";
import { RootStateType } from "../../redux/reduxStore";
import { Header } from "./Header";
const axios = require("axios").default;

type mapDispatchType = {
  setAuthData: (userId: number, email: string, login: string) => void;
};

export type AuthPropsType = AuthStateType & mapDispatchType;

class HeaderContainer extends React.Component<AuthPropsType> {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((resp: CreateAuthResponseType) => {
        let { id, email, login } = resp.data.data;
        if (resp.data.resultCode === 0) {
          this.props.setAuthData(id, email, login);
        }
      });
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

export default connect(mapStateToProps, { setAuthData: setAuthUserDataAC })(
  HeaderContainer
);
