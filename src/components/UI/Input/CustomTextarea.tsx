import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import styles from "./CustomTextarea.module.scss";
import { FieldHookConfig, useField } from "formik";

type CustomInputPropsType = FieldHookConfig<string> & {
  label: string;
  className?: string;
} & DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;

export const CustomTextarea = (props: CustomInputPropsType) => {
  const [field, meta] = useField(props);
  const { label, className } = props;
  return (
    <>
      <label className={styles.checkbox} htmlFor={props.name}>
        {label}
      </label>
      <textarea
        className={`${styles.textarea} ${className ? className : ""}`}
        {...field}
        {...props}
      ></textarea>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};
