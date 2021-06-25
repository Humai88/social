import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.scss";
import { Post } from "./Post/Post";
import { profilePageType, PostType } from "./../../../redux/state";
import { Button } from "../../UI/Button/Button";

type PropsType = {
  data: profilePageType;
  addPostCallback: (postContent: string) => void;
  newPostText: string;
  updatePostTextCallback: (postText: string) => void;
};

export const MyPosts: React.FC<PropsType> = ({
  data,
  addPostCallback,
  newPostText,
  updatePostTextCallback,
}) => {
  let poststElements = data.posts.map((p: PostType) => (
    <Post key={p.id} id={p.id} post={p.post} likes={p.likes} />
  ));

  const onClickHandler = () => {
    addPostCallback(newPostText);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updatePostTextCallback(e.currentTarget.value);
    newPostText = "";
  };

  return (
    <div className={s.wrapper}>
      <h3 className={s.header}>My Posts</h3>
      <div>
        <textarea
          onChange={onChangeHandler}
          value={newPostText}
          placeholder="What's on your mind?"
        />
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
