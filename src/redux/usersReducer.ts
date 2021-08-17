import { followAPI, usersAPI } from "../api/api";
import { Dispatch } from "redux";
// import { v1 } from "uuid";
export type UsersPageType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCout: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};

export type UserType = {
  id: number;
  followed: boolean;
  name: string;
  status: string;
  location: LocationType;
  photos: PhotosType;
};

type PhotosType = {
  small: string;
  large: string;
};
export type LocationType = {
  city: string;
  country: string;
};
const initialState: UsersPageType = {
  users: [],
  pageSize: 10,
  totalUsersCout: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

export const usersReducer = (
  state = initialState,
  action: ActionUsersTypes
): UsersPageType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload.users,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload.currentPage,
      };
    case "SET_TOTAL_COUNT":
      return {
        ...state,
        totalUsersCout: action.payload.totalCount,
      };
    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };
    case "TOGGLE_FOLLOWING_PROGRESS":
      return {
        ...state,
        followingInProgress: action.payload.isFetching
          ? [...state.followingInProgress, action.payload.userId]
          : [
              ...state.followingInProgress.filter(
                (id) => id !== action.payload.userId
              ),
            ],
      };
    default:
      return state;
  }
};

export type ActionUsersTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof toggleIsFetchingAC>
  | ReturnType<typeof toggleFollowingProgressAC>;

export const followAC = (userId: number) => {
  return {
    type: "FOLLOW",
    payload: {
      userId,
    },
  } as const;
};

export const unfollowAC = (userId: number) => {
  return {
    type: "UNFOLLOW",
    payload: {
      userId,
    },
  } as const;
};

export const setUsersAC = (users: UserType[]) => {
  return {
    type: "SET_USERS",
    payload: {
      users,
    },
  } as const;
};

export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: {
      currentPage,
    },
  } as const;
};

export const setTotalUsersCountAC = (totalCount: number) => {
  return {
    type: "SET_TOTAL_COUNT",
    payload: {
      totalCount,
    },
  } as const;
};

export const toggleIsFetchingAC = (isFetching: boolean) => {
  return {
    type: "TOGGLE_IS_FETCHING",
    payload: {
      isFetching,
    },
  } as const;
};
export const toggleFollowingProgressAC = (
  isFetching: boolean,
  userId: number
) => {
  return {
    type: "TOGGLE_FOLLOWING_PROGRESS",
    payload: {
      isFetching,
      userId,
    },
  } as const;
};

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch<ActionUsersTypes>) => {
    dispatch(toggleIsFetchingAC(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetchingAC(false));
      dispatch(setUsersAC(data.items));
      dispatch(setTotalUsersCountAC(data.totalCount));
    });
  };
};
export const followThunkCreator = (id: number) => {
  return (dispatch: Dispatch<ActionUsersTypes>) => {
    dispatch(toggleFollowingProgressAC(true, id));
    followAPI.setFollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followAC(id));
      }
      dispatch(toggleFollowingProgressAC(false, id));
    });
  };
};
export const unfollowThunkCreator = (id: number) => {
  return (dispatch: Dispatch<ActionUsersTypes>) => {
    dispatch(toggleFollowingProgressAC(true, id));
    followAPI.setUnfollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowAC(id));
      }
      dispatch(toggleFollowingProgressAC(false, id));
    });
  };
};
