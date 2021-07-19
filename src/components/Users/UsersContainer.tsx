import { connect } from "react-redux";
import { Dispatch } from "redux";
import { CreateUsersResponseType } from "../../redux/usersReducer";
import { Component } from "react";
import { RootStateType } from "./../../redux/reduxStore";
import {
  UserType,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  followAC,
  unfollowAC,
  UsersPageType,
} from "./../../redux/usersReducer";
import { Users } from "./Users";
const axios = require("axios").default;

class UsersContainer extends Component<UsersPropsType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((resp: CreateUsersResponseType) => {
        this.props.setUsers(resp.data.items);
        this.props.setTotalUsersCount(resp.data.totalCount);
      });
  }
  onChangePageHandler = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((resp: CreateUsersResponseType) => {
        this.props.setUsers(resp.data.items);
      });
  };
  render() {
    return (
      <Users
        totalUsersCout={this.props.totalUsersCout}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onChangePageHandler={this.onChangePageHandler}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

type mapDispatchType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
};

export type UsersPropsType = UsersPageType & mapDispatchType;

const mapStateToProps = (state: RootStateType): UsersPageType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCout: state.usersPage.totalUsersCout,
    currentPage: state.usersPage.currentPage,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
