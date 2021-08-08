import { v1 } from "uuid";
import { profileAPI } from "../api/api";

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
};

const initialState: ProfilePageType = {
  posts: [
    { id: v1(), post: "Hi, Gumay", likes: 7 },
    { id: v1(), post: "How are you?", likes: 9 },
    { id: v1(), post: "Fine, thanks", likes: 15 },
  ],
  newPostText: "",
  profile: null,
};

type ContactsType = {
  github: string | null;
  vk: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
};
export type PhotosType = {
  small: string;
  large: string;
};
export type ProfileResponseType = {
  aboutMe: string | null;
  contacts: ContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: PhotosType;
} | null;

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
  | ReturnType<typeof setUserProfileAC>;

export const addPostAC = () => {
  return {
    type: "ADD-POST",
  } as const;
};

export const updateNewPostTextAC = (newText: string) => {
  return { type: "UPDATE-NEW-POST-TEXT", payload: { newText } } as const;
};
export const setUserProfileAC = (profile: any) => {
  return { type: "SET-USER-PROFILE", payload: { profile } } as const;
};

export const setProfileThunkCreator = (userId: string) => {
  return (dispatch: any) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfileAC(data));
    });
  };
};
