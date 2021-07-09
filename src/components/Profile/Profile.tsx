import React, { Fragment } from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { Cover } from "./Cover/Cover";

export const Profile = () => {
  return (
    <Fragment>
      <Cover />
      <MyPostsContainer />
    </Fragment>
  );
};
