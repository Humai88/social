// import { v1 } from "uuid";
export type UsersPageType = {
  users: UserDataType;
};

export type UserDataType = Array<UserType>;
export type UserType = {
  id: string;
  followed: boolean;
  fullName: string;
  status: string;
  location: LocationType;
  image: string;
};
export type LocationType = {
  city: string;
  country: string;
};

let initialState: UsersPageType = {
  users: [],
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
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case "SET_USERS":
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export type ActionDialogsTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>;

export const followAC = (userId: string) => {
  return {
    type: "FOLLOW",
    userId,
  } as const;
};

export const unfollowAC = (userId: string) => {
  return { type: "UNFOLLOW", userId } as const;
};

export const setUsersAC = (users: any) => {
  return { type: "SET_USERS", users } as const;
};
