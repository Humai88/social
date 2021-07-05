import React, { Fragment } from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { Cover } from "./Cover/Cover";
import { StoreType } from "./../../redux/reduxStore";

type PropsType = {
  store: StoreType;
};

export const Profile: React.FC<PropsType> = ({ store }) => {
  return (
    <Fragment>
      <Cover />
      <MyPostsContainer store={store} />
    </Fragment>
  );
};
