// import { profilePageType } from "./store";

export type PostType = {
  id: number;
  post: string;
  likes: number;
};

export type PostsDataType = Array<PostType>;
export type profilePageType = {
  posts: PostsDataType;
  newPostText: string;
};
let initialState: profilePageType = {
  posts: [
    { id: new Date().getTime(), post: "Hi, Gumay", likes: 7 },
    { id: new Date().getTime(), post: "How are you?", likes: 9 },
    { id: new Date().getTime(), post: "Fine, thanks", likes: 15 },
  ],
  newPostText: "",
};
export const profileReducer = (
  state = initialState,
  action: ActionProfileTypes
) => {
  switch (action.type) {
    case "ADD-POST":
      const newPost = {
        id: new Date().getTime(),
        post: state.newPostText,
        likes: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      break;
    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.newText;
      break;
    default:
      return state;
  }
  return state;
};

export type ActionProfileTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>;

export const addPostAC = () => {
  return {
    type: "ADD-POST",
  } as const;
};

export const updateNewPostTextAC = (text: string) => {
  return { type: "UPDATE-NEW-POST-TEXT", newText: text } as const;
};
