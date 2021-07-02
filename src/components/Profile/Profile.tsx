import React, { Fragment } from "react";
import { MyPosts } from "./MyPosts/MyPosts";
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
      <MyPosts newPostText={data.newPostText} data={data} dispatch={dispatch} />
    </Fragment>
  );
};
