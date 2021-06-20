import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
// import s from "./Profile.module.css";
import { Cover } from "./Cover/Cover";
import { profilePageType } from "./../../redux/state";

type PropsType = {
  data: profilePageType;
  addPostCallback: (postContent: string) => void;
};

export const Profile: React.FC<PropsType> = ({ data, addPostCallback }) => {
  return (
    <div>
      <Cover />
      <MyPosts data={data} addPostCallback={addPostCallback} />
    </div>
  );
};
