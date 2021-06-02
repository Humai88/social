import React from "react";
import s from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.item}>My posts</div>
      <div className={s.item}>new post</div>
    </div>
  );
};

export default MyPosts;
