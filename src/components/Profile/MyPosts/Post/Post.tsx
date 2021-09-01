import React, { Fragment } from "react";
import styles from "./Post.module.scss";
import { PostType } from "../../../../redux/profileReducer";
import { FaHeart } from "react-icons/fa";

export const Post: React.FC<PostType> = (props) => {
  const { post, likes } = props;
  return (
    <div className={styles.post}>
      <p className={styles.item}>{post}</p>
      <div className={styles.likes}>
        <FaHeart style={{ color: "#FF4646", marginRight: "3px" }} />
        {likes}
      </div>
    </div>
  );
};
