import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { profilePageType, PostType } from "./../../../redux/state";
import { Button } from "../../UI/Button/Button";

type PropsType = {
  data: profilePageType;
  addPostCallback: (postContent: string) => void;
};

export const MyPosts: React.FC<PropsType> = ({ data, addPostCallback }) => {
  let poststElements = data.posts.map((p: PostType) => (
    <Post key={p.id} id={p.id} post={p.post} likesCount={p.likes} />
  ));
  let newPostElement = React.createRef<HTMLTextAreaElement>();
  const onClickHandler = () => {
    if (newPostElement.current) {
      addPostCallback(newPostElement.current.value);
    }
  };
  return (
    <div className={s.wrapper}>
      <h3 className={s.header}>My Posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <Button onClick={onClickHandler} className={s.addPostBtn}>
          Add
        </Button>
      </div>
      <div>{poststElements}</div>
    </div>
  );
};
