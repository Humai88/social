import { connect } from "react-redux";
import { Dispatch } from "redux";
import Users from "./Users";
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

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
