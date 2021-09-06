import { Fragment } from "react";
import { connect } from "react-redux";
import { Component } from "react";
import { RootStateType } from "./../../redux/reduxStore";
import {
  setCurrentPageAC,
  UsersPageType,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
} from "./../../redux/usersReducer";
import { Users } from "./Users";
import { Preloader } from "../../common/Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/authRedirect";

class UsersContainer extends Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onChangePageHandler = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };
  render() {
    return (
      <Fragment>
        {this.props.isFetching ? <Preloader /> : null}
        <Users {...this.props} onChangePageHandler={this.onChangePageHandler} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootStateType): UsersPageType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCout: state.usersPage.totalUsersCout,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose<React.ComponentClass>(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator,
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsersThunkCreator,
  })
)(UsersContainer);

// Types
type mapDispatchType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setCurrentPage: (currentPage: number) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
};

export type UsersPropsType = UsersPageType & mapDispatchType;
