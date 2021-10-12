import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getStatusThunkCreator,
  savePhotoThunkCreator,
  setProfileThunkCreator,
  updateStatusThunkCreator,
} from "../../redux/profileReducer";
import { RootStateType } from "../../redux/reduxStore";
import { Profile } from "./Profile";
import { RouteComponentProps } from "react-router";
import { withAuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";
import { ProfileResponseType } from "../../api/api";

const mapStateToProps = (state: RootStateType): mapStateType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

class ProfileContainer extends Component<PropsType> {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = `${this.props.autorizedUserId}`;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.setUserProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps: any) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    setUserProfile: setProfileThunkCreator,
    getStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator,
    savePhoto: savePhotoThunkCreator,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

// Types
type PathParamsType = {
  userId: string;
};
type mapStateType = {
  profile: ProfileResponseType;
  status: string;
  autorizedUserId: number | null;
  isAuth: boolean;
};
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

type mapDispatchType = {
  setUserProfile: (userId: string) => void;
  getStatus: (status: string) => void;
  updateStatus: (status: string) => void;
  savePhoto: any;
};
export type ProfilePropsType = mapStateType & mapDispatchType;
