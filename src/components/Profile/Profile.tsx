import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
// import s from "./Profile.module.css";
import { Cover } from "./Cover/Cover";
import { profilePageType } from "./../../redux/state";

type PropsType = {
  data: profilePageType;
  addPostCallback: () => void;
  updatePostTextCallback: (postText: string) => void;
};

export const Profile: React.FC<PropsType> = ({
  data,
  addPostCallback,
  updatePostTextCallback,
}) => {
  return (
    <div>
      <Cover />
      <MyPosts
        updatePostTextCallback={updatePostTextCallback}
        newPostText={data.newPostText}
        data={data}
        addPostCallback={addPostCallback}
      />
    </div>
  );
};
