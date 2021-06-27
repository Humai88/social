import React, { Fragment } from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { Cover } from "./Cover/Cover";
import { profilePageType } from "./../../redux/state";

type PropsType = {
  data: profilePageType;
  addPostCallback: (newPostText: string) => void;
  updatePostTextCallback: (postText: string) => void;
};

export const Profile: React.FC<PropsType> = ({
  data,
  addPostCallback,
  updatePostTextCallback,
}) => {
  return (
    <Fragment>
      <Cover />
      <MyPosts
        updatePostTextCallback={updatePostTextCallback}
        newPostText={data.newPostText}
        data={data}
        addPostCallback={addPostCallback}
      />
    </Fragment>
  );
};
