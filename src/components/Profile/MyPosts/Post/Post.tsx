import React from "react";
import s from "./Post.module.css";

export type PropsType = {
  id: number;
  post: string;
  likesCount: number;
};
const Post: React.FC<PropsType> = ({ post, likesCount }) => {
  return (
    <div>
      <div className={s.item}>{post}</div>
      <div>{likesCount}</div>
    </div>
  );
};

export default Post;
