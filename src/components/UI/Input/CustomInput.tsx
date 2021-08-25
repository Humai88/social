import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./CustomInput.module.scss";
import { FieldHookConfig, useField } from "formik";

type CustomInputPropsType = FieldHookConfig<string> & {
  label: string;
  className?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export const CustomInput = (props: CustomInputPropsType) => {
  const [field, meta] = useField(props);
  const { label, className } = props;
  return (
    <>
      <label className={styles.label} htmlFor={props.name}>
        {label}
      </label>
      <input
        className={`${styles.input} ${className ? className : ""}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};
