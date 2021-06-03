import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const postsData = [
    { id: 1, post: "Hi", likes: 7 },
    { id: 2, post: "How are you?", likes: 9 },
    { id: 3, post: "Fine, thanks", likes: 15 },
  ];
  let poststElements = postsData.map((p) => (
    <Post id={p.id} post={p.post} likesCount={p.likes} />
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
