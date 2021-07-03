import React, { ChangeEvent } from "react";
import styles from "./MyPosts.module.scss";
import { Post } from "./Post/Post";
import { PostsDataType, PostType } from "./../../../redux/reduxStore";
import { Button } from "../../UI/Button/Button";

type PropsType = {
  data: PostsDataType;
  updateNewPostText: (text: string) => void;
  addPost: () => void;
  newPostText: string;
};

export const MyPosts: React.FC<PropsType> = ({
  data,
  addPost,
  updateNewPostText,
  newPostText,
}) => {
  let poststElements = data.map((p: PostType) => (
    <Post key={p.id} id={p.id} post={p.post} likes={p.likes} />
  ));

  const onClickHandler = () => {
    addPost();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value;
    updateNewPostText(text);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>My Posts</h3>

      <textarea
        className={styles.textArea}
        onChange={onChangeHandler}
        value={newPostText}
        placeholder="What's on your mind?"
      />

      <Button onClick={onClickHandler} className={styles.addPostBtn}>
        Add
      </Button>

      <div>{poststElements}</div>
    </div>
  );
};
