import { RootStateType } from "../redux/reduxStore";

export const getUsers = (state: RootStateType) => {
  return state.usersPage.users;
};
export const getPageSize = (state: RootStateType) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCout = (state: RootStateType) => {
  return state.usersPage.totalUsersCout;
};
export const getCurrentPage = (state: RootStateType) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state: RootStateType) => {
  return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state: RootStateType) => {
  return state.usersPage.followingInProgress;
};
