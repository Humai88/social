import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getStatusThunkCreator,
  setProfileThunkCreator,
  updateStatusThunkCreator,
} from "../../redux/profileReducer";
import { RootStateType } from "../../redux/reduxStore";
import { Profile } from "./Profile";
import { RouteComponentProps } from "react-router";
import { withAuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";
import { ProfileResponseType } from "../../api/api";

type PathParamsType = {
  userId: string;
};
type mapStateType = {
  profile: ProfileResponseType;
  status: string;
};
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;
type mapDispatchType = {
  setUserProfile: (userId: string) => void;
  getStatus: (status: string) => void;
  updateStatus: (status: string) => void;
};

const mapStateToProps = (state: RootStateType): mapStateType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};
export type ProfilePropsType = mapStateType & mapDispatchType;

class ProfileContainer extends Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "18297";
    }
    this.props.setUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    setUserProfile: setProfileThunkCreator,
    getStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
