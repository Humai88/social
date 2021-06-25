import React from "react";
import s from "./Post.module.scss";
import { PostType } from "./../../../../redux/state";

export const Post: React.FC<PostType> = ({ post, likes }) => {
  return (
    <div>
      <div className={s.item}>{post}</div>
      <div>{likes}</div>
    </div>
  );
};
