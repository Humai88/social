import React, { Fragment } from "react";
import s from "./Post.module.scss";
import { PostType } from "../../../../redux/reduxStore";

export const Post: React.FC<PostType> = ({ post, likes }) => {
  return (
    <Fragment>
      <p className={s.item}>{post}</p>
      <div>{likes}</div>
    </Fragment>
  );
};
