import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostsDataType, PostType } from "./../../../index";
type PropsType = {
  posts: PostsDataType;
};

const MyPosts: React.FC<PropsType> = ({ posts }) => {
  let poststElements = posts.map((p: PostType) => (
    <Post key={p.id} id={p.id} post={p.post} likesCount={p.likes} />
  ));

  return (
    <div className={s.wrapper}>
      <h3 className={s.header}>My Posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div>{poststElements}</div>
    </div>
  );
};

export default MyPosts;
