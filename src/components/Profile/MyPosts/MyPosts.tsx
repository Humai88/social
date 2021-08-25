import React, { ChangeEvent } from "react";
import styles from "./MyPosts.module.scss";
import { Post } from "./Post/Post";
import { PostType } from "./../../../redux/profileReducer";
import { Button } from "../../UI/Button/Button";
import { ProfilePropsType } from "./MyPostsContainer";
import { Form, Formik } from "formik";
import { CustomTextarea } from "../../UI/Input/CustomTextarea";

export const MyPosts: React.FC<ProfilePropsType> = (props) => {
  const { data, addPost, updateNewPostText, newPostText } = props;

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
      <PostForm />
      <div>{poststElements}</div>
    </div>
  );
};

export const PostForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          post: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          resetForm();
          setSubmitting(false);
          console.log(values);
        }}
      >
        <div className={styles.form}>
          <Form>
            <CustomTextarea name="post" label="What's new?" />
            <Button className={styles.btn} type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Formik>
    </>
  );
};
