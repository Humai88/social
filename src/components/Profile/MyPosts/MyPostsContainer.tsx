import React, { useContext } from "react";
import { MyPosts } from "./MyPosts";
import { StoreType } from "../../../redux/reduxStore";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import { StoreContext } from "./../../../storeContext";

export const MyPostsContainer = () => {
  const ctx: StoreType = useContext(StoreContext);
  let state = ctx.getState();
  const addPost = () => {
    ctx.dispatch(addPostAC());
  };

  const onPostHandler = (text: string) => {
    let action = updateNewPostTextAC(text);
    ctx.dispatch(action);
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
