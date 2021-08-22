import { Dispatch } from "redux";
import { v1 } from "uuid";
import { profileAPI, ProfileResponseType } from "../api/api";

export type PostType = {
  id: string;
  post: string;
  likes: number;
};

export type PostsDataType = Array<PostType>;

export type ProfilePageType = {
  posts: PostsDataType;
  newPostText: string;
  profile: ProfileResponseType;
  status: string;
};

const initialState: ProfilePageType = {
  posts: [
    { id: v1(), post: "Hi, Gumay", likes: 7 },
    { id: v1(), post: "How are you?", likes: 9 },
    { id: v1(), post: "Fine, thanks", likes: 15 },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

export const profileReducer = (
  state = initialState,
  action: ActionProfileTypes
): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST":
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: v1(),
            post: state.newPostText,
            likes: 0,
          },
        ],
        newPostText: "",
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload.status,
      };
    case "UPDATE-NEW-POST-TEXT":
      return {
        ...state,
        newPostText: action.payload.newText,
      };
    case "SET-USER-PROFILE":
      return {
        ...state,
        profile: action.payload.profile,
      };

    default:
      return state;
  }
};

export type ActionProfileTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof setUserProfileAC>
  | ReturnType<typeof setStatusAC>;

export const addPostAC = () => {
  return {
    type: "ADD-POST",
  } as const;
};
export const setStatusAC = (status: string) => {
  return {
    type: "SET_STATUS",
    payload: {
      status,
    },
  } as const;
};

export const updateNewPostTextAC = (newText: string) => {
  return { type: "UPDATE-NEW-POST-TEXT", payload: { newText } } as const;
};

export const setUserProfileAC = (profile: ProfileResponseType) => {
  return { type: "SET-USER-PROFILE", payload: { profile } } as const;
};

export const setProfileThunkCreator = (userId: string) => {
  return (dispatch: Dispatch<ActionProfileTypes>) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  };
};

export const getStatusThunkCreator = (userId: string) => {
  return (dispatch: Dispatch<ActionProfileTypes>) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatusAC(data));
    });
  };
};

export const updateStatusThunkCreator = (status: string) => {
  return (dispatch: Dispatch<ActionProfileTypes>) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
    });
  };
};
