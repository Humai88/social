import React, { ChangeEvent } from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.scss";
import { Message } from "./Message/Message/Message";
import { Button } from "./../UI/Button/Button";
import { MassagesPropsType } from "./DialogsContainer";
import { MessageType, DialogType } from "./../../redux/dialogsReducer";
import { Form, Formik } from "formik";
import { CustomTextarea } from "../UI/Input/CustomTextarea";

export const Dialogs: React.FC<MassagesPropsType> = (props) => {
  const { data, updateNewMessage, addMessage, newMessageText } = props;

  let dialogsElements = data.dialogs.map((d: DialogType) => (
    <DialogItem image={d.image} key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = data.messages.map((m: MessageType) => (
    <Message key={m.id} text={m.text} id={m.id} />
  ));

  const onClickHandler = () => {
    addMessage();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value;
    updateNewMessage(body);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{dialogsElements}</div>
      <div>
        <div className={styles.messages}>{messagesElements}</div>
        <div className={styles.wrapperAddArea}>
          <MessageForm />
          {/* <textarea
            onChange={onChangeHandler}
            className={styles.textArea}
            value={newMessageText}
            placeholder="Write a message..."
          ></textarea>
          <Button onClick={onClickHandler} className={styles.btn}>
            send
          </Button> */}
        </div>
      </div>
    </div>
  );
};
export const MessageForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          message: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          resetForm();
          setSubmitting(false);
          console.log(values);
        }}
      >
        <div className={styles.form}>
          <Form>
            <CustomTextarea name="message" label="" />
            <Button className={styles.btn} type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Formik>
    </>
  );
};
