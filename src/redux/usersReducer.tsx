// import { v1 } from "uuid";
export type UsersPageType = {
  users: UserDataType;
};

export type UserDataType = Array<UserType>;
export type UserType = {
  id: number;
  followed: boolean;
  name: string;
  status: string;
  location: LocationType;
  photos: PhotosType;
};
export type GetUsersResponseType = {
  items: UserType[];
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

export const followAC = (userId: number) => {
  return {
    type: "FOLLOW",
    userId,
  } as const;
};

export const unfollowAC = (userId: number) => {
  return { type: "UNFOLLOW", userId } as const;
};

export const setUsersAC = (users: any) => {
  return { type: "SET_USERS", users } as const;
};
