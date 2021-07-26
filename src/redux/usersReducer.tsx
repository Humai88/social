// import { v1 } from "uuid";
export type UsersPageType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCout: number;
  currentPage: number;
  isFetching: boolean;
};

export type UserType = {
  id: number;
  followed: boolean;
  name: string;
  status: string;
  location: LocationType;
  photos: PhotosType;
};
export type GetUsersResponseType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};

export type CreateUsersResponseType = {
  // resultCode: number;
  // messages: string[];
  data: GetUsersResponseType;
};
type PhotosType = {
  small: string;
  large: string;
};
export type LocationType = {
  city: string;
  country: string;
};

let initialState: UsersPageType = {
  users: [],
  pageSize: 5,
  totalUsersCout: 0,
  currentPage: 2,
  isFetching: true,
};

export const usersReducer = (
  state = initialState,
  action: ActionDialogsTypes
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
    default:
      return state;
  }
};

export type ActionDialogsTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof toggleIsFetchingAC>;

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
