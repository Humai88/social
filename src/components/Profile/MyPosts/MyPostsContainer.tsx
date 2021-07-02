import React from "react";
import { MyPosts } from "./MyPosts";
import { PostsDataType } from "../../../redux/profileReducer";
import {
  addPostAC,
  updateNewPostTextAC,
  ActionProfileTypes,
} from "../../../redux/profileReducer";

type PropsType = {
  data: PostsDataType;
  dispatch: (action: ActionProfileTypes) => void;
  newPostText: string;
};

export const MyPostsContainer: React.FC<PropsType> = ({
  data,
  dispatch,
  newPostText,
}) => {
  const addPost = () => {
    dispatch(addPostAC());
  };

  const onPostHandler = (text: string) => {
    let action = updateNewPostTextAC(text);
    dispatch(action);
  };

  return (
    <MyPosts
      newPostText={newPostText}
      data={data}
      updateNewPostText={onPostHandler}
      addPost={addPost}
    />
  );
};
