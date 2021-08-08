import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  PostsDataType,
  ProfileResponseType,
  setProfileThunkCreator,
} from "../../redux/profileReducer";
import { RootStateType } from "../../redux/reduxStore";
import { Profile } from "./Profile";
import { RouteComponentProps } from "react-router";

type PathParamsType = {
  userId: string;
};
type mapStateType = {
  posts: PostsDataType;
  newPostText: string;
  profile: ProfileResponseType;
  isAuth: boolean;
};
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;
type mapDispatchType = {
  setUserProfile: (userId: string) => void;
};

const mapStateToProps = (state: RootStateType): mapStateType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
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

const UrlDataContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
  setUserProfile: setProfileThunkCreator,
})(UrlDataContainer);
