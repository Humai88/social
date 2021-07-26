import { Component } from "react";
import { connect } from "react-redux";
import {
  CreateProfileResponseType,
  ProfileResponseType,
  ProfilePageType,
  setUserProfileAC,
} from "../../redux/profileReducer";
import { RootStateType } from "../../redux/reduxStore";
import { Profile } from "./Profile";
const axios = require("axios").default;

class ProfileContainer extends Component<ProfilePropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/10`)
      .then((resp: CreateProfileResponseType) => {
        this.props.setUserProfile(resp.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

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

export default connect(mapStateToProps, { setUserProfile: setUserProfileAC })(
  ProfileContainer
);
