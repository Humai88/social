import React from "react";
import { connect } from "react-redux";
import { AuthStateType, setAuthUserDataAC } from "../../redux/authReducer";
import { RootStateType } from "../../redux/reduxStore";
import { Header } from "./Header";
import { usersAPI } from "../../api/api";

type mapDispatchType = {
  setAuthData: (
    userId: number,
    email: string,
    login: string,
    photo?: string
  ) => void;
};

export type AuthPropsType = AuthStateType & mapDispatchType;

class HeaderContainer extends React.Component<AuthPropsType> {
  componentDidMount() {
    usersAPI.userAuth().then((data) => {
      let { id, email, login } = data.data;
      if (data.resultCode === 0) {
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
