import React from "react";
import styles from "./MyPosts.module.scss";
import { Post } from "./Post/Post";
import { PostType } from "./../../../redux/profileReducer";
import { Button } from "../../UI/Button/Button";
import { ProfilePropsType } from "./MyPostsContainer";
import { Form, Formik } from "formik";
import { CustomTextarea } from "../../UI/Input/CustomTextarea";
import * as Yup from "yup";

export const MyPosts: React.FC<ProfilePropsType> = (props) => {
  const { data, addPost, updateNewPostText, newPostText } = props;

  let poststElements = data.map((p: PostType) => (
    <Post key={p.id} id={p.id} post={p.post} likes={p.likes} />
  ));

  return (
    <div className={styles.wrapper}>
      <PostForm updateNewPostText={updateNewPostText} addPost={addPost} />
      <div className={styles.posts}>{poststElements}</div>
    </div>
  );
};

type PostFormPropsType = {
  updateNewPostText: (text: string) => void;
  addPost: () => void;
};
export const PostForm: React.FC<PostFormPropsType> = ({
  updateNewPostText,
  addPost,
}) => {
  return (
    <>
      <Formik
        initialValues={{
          post: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          resetForm();
          setSubmitting(false);
          updateNewPostText(values.post);
          addPost();
        }}
        validationSchema={Yup.object({
          post: Yup.string()
            .min(1, "Must be at least 1 character")
            .required(""),
        })}
      >
        <div className={styles.form}>
          <Form>
            <CustomTextarea name="post" placeholder="What's new?" />
            <Button className={styles.btn} type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Formik>
    </>
  );
};
