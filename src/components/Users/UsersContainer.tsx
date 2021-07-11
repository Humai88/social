import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Users } from "./Users";
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
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
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
    follow: (userId: string) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId: string) => {
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
