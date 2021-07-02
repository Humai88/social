import React, { Fragment } from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { Cover } from "./Cover/Cover";
import { profilePageType } from "./../../redux/profileReducer";
import { ActionProfileTypes } from "./../../redux/profileReducer";

type PropsType = {
  data: profilePageType;
  dispatch: (action: ActionProfileTypes) => void;
};

export const Profile: React.FC<PropsType> = ({ data, dispatch }) => {
  return (
    <Fragment>
      <Cover />
      <MyPostsContainer
        newPostText={data.newPostText}
        data={data.posts}
        dispatch={dispatch}
      />
    </Fragment>
  );
};
