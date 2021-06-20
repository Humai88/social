import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { profilePageType, PostType } from "./../../../redux/state";
import { Button } from "../../UI/Button/Button";

type PropsType = {
  data: profilePageType;
};

export const MyPosts: React.FC<PropsType> = ({ data }) => {
  let poststElements = data.posts.map((p: PostType) => (
    <Post key={p.id} id={p.id} post={p.post} likesCount={p.likes} />
  ));
  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    const text = newPostElement.current?.value;
    alert(text);
  };
  return (
    <div className={s.wrapper}>
      <h3 className={s.header}>My Posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <Button onClick={addPost} className={s.addPostBtn}>
          Add
        </Button>
      </div>
      <div>{poststElements}</div>
    </div>
  );
};
