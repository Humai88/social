import { profile } from "console";
import { v1 } from "uuid";
import { PhotosType, profileAPI, ProfileResponseType } from "../api/api";
import { ThunkType } from "./reduxStore";

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
  profile: {
    aboutMe: "",
    contacts: {
      github: "",
      vk: "",
      facebook: "",
      instagram: "",
      twitter: "",
      website: "",
      youtube: "",
      mainLink: "",
    },
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    userId: null,
    photos: {
      large: "",
      small: "",
    },
  },
  status: "",
};

export const profileReducer = (
  state = initialState,
  action: ActionProfileTypes
): ProfilePageType => {
  switch (action.type) {
    case "profile/ADD-POST":
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
    case "profile/SET_STATUS":
      return {
        ...state,
        status: action.payload.status,
      };
    case "profile/UPDATE-NEW-POST-TEXT":
      return {
        ...state,
        newPostText: action.payload.newText,
      };
    case "profile/SET-USER-PROFILE":
      return {
        ...state,
        profile: action.payload.profile,
      };
    case "profile/UPDATE-PHOTO":
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload.photos },
      };

    default:
      return state;
  }
};

//Action Creators
export const addPostAC = () => {
  return {
    type: "profile/ADD-POST",
  } as const;
};
export const setStatusAC = (status: string) => {
  return {
    type: "profile/SET_STATUS",
    payload: {
      status,
    },
  } as const;
};

export const updateNewPostTextAC = (newText: string) => {
  return {
    type: "profile/UPDATE-NEW-POST-TEXT",
    payload: { newText },
  } as const;
};

export const setUserProfileAC = (profile: ProfileResponseType) => {
  return { type: "profile/SET-USER-PROFILE", payload: { profile } } as const;
};

export const updatePhotoAC = (photos: PhotosType) => {
  return {
    type: "profile/UPDATE-PHOTO",
    payload: { photos },
  } as const;
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

export const savePhotoThunkCreator = (photo: File): ThunkType => {
  return (dispatch) => {
    profileAPI.savePhoto(photo).then((data) => {
      if (data.resultCode === 0) {
        dispatch(updatePhotoAC(data.data.photos));
      }
    });
  };
};
// Types
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

export type ActionProfileTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof setUserProfileAC>
  | ReturnType<typeof setStatusAC>
  | ReturnType<typeof updatePhotoAC>;
