import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../UI/Button/Button";
import { CustomCheckbox } from "../UI/Checkbox/CustomCheckbox";
import { CustomInput } from "../UI/Input/CustomInput";
import styles from "./Login.module.scss";

export const Login = () => {
  return (
    <div className={styles.formWrapper}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export const LoginForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          login: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={Yup.object({
          login: Yup.string()
            .min(3, "Must be at least 3 characters")
            .max(15, "Must be 15 characters or less")
            .required("Required!"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short (8 characters minimum).")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
          rememberMe: Yup.boolean(),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          resetForm();
          setSubmitting(false);
          console.log(values);
        }}
      >
        {(props) => (
          <Form className={styles.form}>
            <CustomInput type="text" name="login" label="Login" />
            <CustomInput type="password" name="password" label="Password" />
            <CustomCheckbox name="rememberMe">Remember me</CustomCheckbox>
            <Button className={styles.btn} type="submit">
              {props.isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
