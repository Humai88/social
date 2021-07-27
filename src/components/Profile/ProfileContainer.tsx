import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  CreateProfileResponseType,
  ProfileResponseType,
  ProfilePageType,
  setUserProfileAC,
} from "../../redux/profileReducer";
import { RootStateType } from "../../redux/reduxStore";
import { Profile } from "./Profile";
import { RouteComponentProps } from "react-router";
const axios = require("axios").default;

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
      userId = "9";
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((resp: CreateProfileResponseType) => {
        this.props.setUserProfile(resp.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const UrlDataContainer = withRouter<any, any>(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile: setUserProfileAC })(
  UrlDataContainer
);
