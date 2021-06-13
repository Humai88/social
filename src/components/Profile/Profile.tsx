import React from "react";
import MyPosts from "./MyPosts/MyPosts";
// import s from "./Profile.module.css";
import Cover from "./Cover/Cover";
import { PostsDataType } from "./../../index";

type PropsType = {
  posts: PostsDataType;
};

const Profile: React.FC<PropsType> = ({ posts }) => {
  return (
    <div>
      <Cover />
      <MyPosts posts={posts} />
    </div>
  );
};

export default Profile;
