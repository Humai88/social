import { v1 } from "uuid";

export type PostType = {
  id: string;
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
    { id: v1(), post: "Hi, Gumay", likes: 7 },
    { id: v1(), post: "How are you?", likes: 9 },
    { id: v1(), post: "Fine, thanks", likes: 15 },
  ],
  newPostText: "",
};

export const profileReducer = (
  state = initialState,
  action: ActionProfileTypes
): profilePageType => {
  switch (action.type) {
    case "ADD-POST":
      const newPost = {
        id: v1(),
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
