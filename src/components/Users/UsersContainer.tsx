import { Fragment } from "react";
import { connect } from "react-redux";
import { CreateUsersResponseType } from "../../redux/usersReducer";
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
} from "./../../redux/usersReducer";
import { Users } from "./Users";
import { Preloader } from "../../common/Preloader/Preloader";
const axios = require("axios").default;

type mapDispatchType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
};

export type UsersPropsType = UsersPageType & mapDispatchType;
class UsersContainer extends Component<UsersPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((resp: CreateUsersResponseType) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(resp.data.items);
        this.props.setTotalUsersCount(resp.data.totalCount);
      });
  }
  onChangePageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((resp: CreateUsersResponseType) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(resp.data.items);
      });
  };
  render() {
    return (
      <Fragment>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCout={this.props.totalUsersCout}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onChangePageHandler={this.onChangePageHandler}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
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
  };
};

export default connect(mapStateToProps, {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUsersCount: setTotalUsersCountAC,
  toggleIsFetching: toggleIsFetchingAC,
})(UsersContainer);
