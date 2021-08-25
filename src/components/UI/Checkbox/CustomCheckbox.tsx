import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./CustomCheckbox.module.scss";
import { FieldHookConfig, useField } from "formik";

type CustomInputPropsType = FieldHookConfig<string> &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const CustomCheckbox: React.FC<CustomInputPropsType> = ({
  children,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>
        <input
          type="checkbox"
          className={styles.checkbox}
          {...field}
          {...props}
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};
