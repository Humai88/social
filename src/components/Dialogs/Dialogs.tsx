import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.scss";
import { Message } from "./Message/Message/Message";
import { Button } from "./../UI/Button/Button";
import { MassagesPropsType } from "./DialogsContainer";
import { MessageType, DialogType } from "./../../redux/dialogsReducer";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CustomTextarea } from "../UI/Input/CustomTextarea";

type MsgPropsType = {
  updateNewMessage: (body: string) => void;
  addMessage: () => void;
};
export const Dialogs: React.FC<MassagesPropsType> = (props) => {
  const { data, updateNewMessage, addMessage } = props;

  let dialogsElements = data.dialogs.map((d: DialogType) => (
    <DialogItem image={d.image} key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = data.messages.map((m: MessageType) => (
    <Message key={m.id} text={m.text} id={m.id} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.items}>{dialogsElements}</div>
      <div>
        <div className={styles.messages}>{messagesElements}</div>
        <div className={styles.wrapperAddArea}>
          <MessageForm
            updateNewMessage={updateNewMessage}
            addMessage={addMessage}
          />
        </div>
      </div>
    </div>
  );
};
export const MessageForm: React.FC<MsgPropsType> = ({
  updateNewMessage,
  addMessage,
}) => {
  return (
    <>
      <Formik
        initialValues={{
          message: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          resetForm();
          setSubmitting(false);
          updateNewMessage(values.message);
          addMessage();
        }}
        validationSchema={Yup.object({
          message: Yup.string()
            .min(1, "Must be at least 1 character")
            .required(""),
        })}
      >
        <div className={styles.form}>
          <Form>
            <CustomTextarea name="message" placeholder="Type your message..." />
            <Button className={styles.btn} type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Formik>
    </>
  );
};
