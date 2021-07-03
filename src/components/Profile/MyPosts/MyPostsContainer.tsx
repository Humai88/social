import React from "react";
import { MyPosts } from "./MyPosts";
import { StoreType } from "../../../redux/reduxStore";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";

type PropsType = {
  store: StoreType;
};

export const MyPostsContainer: React.FC<PropsType> = ({ store }) => {
  let state = store.getState();
  const addPost = () => {
    store.dispatch(addPostAC());
  };

  const onPostHandler = (text: string) => {
    let action = updateNewPostTextAC(text);
    store.dispatch(action);
  };

  return (
    <MyPosts
      newPostText={state.profilePage.newPostText}
      data={state.profilePage.posts}
      updateNewPostText={onPostHandler}
      addPost={addPost}
    />
  );
};
