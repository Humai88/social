import React, { ChangeEvent } from "react";
import styles from "./MyPosts.module.scss";
import { Post } from "./Post/Post";
import {
  profilePageType,
  PostType,
  addPostAC,
  updateNewPostTextAC,
} from "./../../../redux/state";
import { Button } from "../../UI/Button/Button";

type PropsType = {
  data: profilePageType;
  dispatch: any;
  newPostText: string;
};

export const MyPosts: React.FC<PropsType> = ({
  data,
  dispatch,
  newPostText,
}) => {
  let poststElements = data.posts.map((p: PostType) => (
    <Post key={p.id} id={p.id} post={p.post} likes={p.likes} />
  ));

  const onClickHandler = () => {
    dispatch(addPostAC());
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateNewPostTextAC(e.currentTarget.value));
    newPostText = "";
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>My Posts</h3>
      <div>
        <textarea
          className={styles.textArea}
          onChange={onChangeHandler}
          value={newPostText}
          placeholder="What's on your mind?"
        />
      </div>
      <div>
        <Button onClick={onClickHandler} className={styles.addPostBtn}>
          Add
        </Button>
      </div>
      <div>{poststElements}</div>
    </div>
  );
};
