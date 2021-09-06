import { v1 } from "uuid";
import { profileAPI, ProfileResponseType } from "../api/api";
import { ThunkType } from "./reduxStore";

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
    {
      id: v1(),
      post:
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.",
      likes: 9,
    },
    {
      id: v1(),
      post:
        "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
      likes: 7,
    },

    {
      id: v1(),
      post:
        "Keep smiling, because life is a beautiful thing and there’s so much to smile about.",
      likes: 15,
    },
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
          {
            id: v1(),
            post: state.newPostText,
            likes: 0,
          },
          ...state.posts,
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

//Action Creators
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

// Thunks
export const setProfileThunkCreator = (userId: number): ThunkType => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  };
};

export const getStatusThunkCreator = (userId: number): ThunkType => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatusAC(data));
    });
  };
};

export const updateStatusThunkCreator = (status: string): ThunkType => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
    });
  };
};
