import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import s from "./Profile.module.css";
import Cover from "./Cover/Cover";
const Profile = () => {
  return (
    <div>
      <Cover />
      <MyPosts />
    </div>
  );
};

export default Profile;
