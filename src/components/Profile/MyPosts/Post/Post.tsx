import React from "react";
import s from "./Post.module.css";

// type PostType = {
//   id: number;
//   post: string;
//   likesCount: number;
// };
// type PropsType = {
//   posts: PostType[];
// };
type PropsType = {
  id: number;
  post: string;
  likesCount: number;
};
const Post = ({ id, post, likesCount }: PropsType) => {
  return (
    <div>
      <div className={s.item}>{post}</div>
      <div>{likesCount}</div>
    </div>
  );
};

export default Post;
