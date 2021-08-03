import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  ProfileResponseType,
  ProfilePageType,
  setUserProfileAC,
} from "../../redux/profileReducer";
import { RootStateType } from "../../redux/reduxStore";
import { Profile } from "./Profile";
import { RouteComponentProps } from "react-router";
import { usersAPI } from "../../api/api";

type PathParamsType = {
  userId: string;
};
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;
type mapDispatchType = {
  setUserProfile: (profile: ProfileResponseType) => void;
};

const mapStateToProps = (state: RootStateType): ProfilePageType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
  };
};
export type ProfilePropsType = ProfilePageType & mapDispatchType;

class ProfileContainer extends Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "11";
    }
    usersAPI.getProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const UrlDataContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile: setUserProfileAC })(
  UrlDataContainer
);
