import React from "react";
import s from "./Post.module.css";
import { PostType } from "./../../../../redux/state";

// export type PropsType = {
//   id: number;
//   post: string;
//   likesCount: number;
// };

export const Post: React.FC<PostType> = ({ post, likes }) => {
  return (
    <div>
      <div className={s.item}>{post}</div>
      <div>{likes}</div>
    </div>
  );
};
