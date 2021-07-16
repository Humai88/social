import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Users from "./Users";
import { RootStateType } from "./../../redux/reduxStore";
import {
  UserDataType,
  setUsersAC,
  followAC,
  unfollowAC,
} from "./../../redux/usersReducer";

type mapStateType = {
  users: UserDataType;
};
type mapDispatchType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: any) => void;
};
export type UsersPropsType = mapStateType & mapDispatchType;

const mapStateToProps = (state: RootStateType): mapStateType => {
  return {
    users: state.usersPage.users,
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
    setUsers: (users: any) => {
      dispatch(setUsersAC(users));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
