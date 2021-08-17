import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  ProfileResponseType,
  setProfileThunkCreator,
} from "../../redux/profileReducer";
import { RootStateType } from "../../redux/reduxStore";
import { Profile } from "./Profile";
import { RouteComponentProps } from "react-router";
import { withAuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";

type PathParamsType = {
  userId: string;
};
type mapStateType = {
  profile: ProfileResponseType;
};
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;
type mapDispatchType = {
  setUserProfile: (userId: string) => void;
};

const mapStateToProps = (state: RootStateType): mapStateType => {
  return {
    profile: state.profilePage.profile,
  };
};
export type ProfilePropsType = mapStateType & mapDispatchType;

class ProfileContainer extends Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "11";
    }
    this.props.setUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    setUserProfile: setProfileThunkCreator,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
