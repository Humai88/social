import { profilePageType } from "./store";

export const profileReducer = (
  state: profilePageType,
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
