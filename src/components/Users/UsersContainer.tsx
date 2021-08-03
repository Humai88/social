import { Fragment } from "react";
import { connect } from "react-redux";
import { Component } from "react";
import { RootStateType } from "./../../redux/reduxStore";
import {
  UserType,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleIsFetchingAC,
  followAC,
  unfollowAC,
  UsersPageType,
  toggleFollowingProgressAC,
} from "./../../redux/usersReducer";
import { Users } from "./Users";
import { Preloader } from "../../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

type mapDispatchType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
  toggleFollowing: (isFetching: boolean, userId: number) => void;
};

export type UsersPropsType = UsersPageType & mapDispatchType;
class UsersContainer extends Component<UsersPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }
  onChangePageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
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

export default connect(mapStateToProps, {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUsersCount: setTotalUsersCountAC,
  toggleIsFetching: toggleIsFetchingAC,
  toggleFollowing: toggleFollowingProgressAC,
})(UsersContainer);
