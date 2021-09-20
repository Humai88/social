import { Form, Formik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Button } from "../UI/Button/Button";
import { CustomCheckbox } from "../UI/Checkbox/CustomCheckbox";
import { CustomInput } from "../UI/Input/CustomInput";
import styles from "./Login.module.scss";
import { loginThunkCreator } from "./../../redux/authReducer";
import { Redirect } from "react-router-dom";
import { RootStateType } from "../../redux/reduxStore";

// Types
type LoginFormPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    setStatus: (status: string[]) => void
  ) => void;
};

type mapDispatchType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    setStatus: (status: string[]) => void
  ) => void;
};
export type LoginPropsType = mapStateType & mapDispatchType;

// Components
const Login: React.FC<LoginPropsType> = ({ login, isAuth }) => {
  if (isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div className={styles.formWrapper}>
      <h1>Login</h1>
      <LoginForm login={login} />
    </div>
  );
};

export const LoginForm: React.FC<LoginFormPropsType> = ({ login }) => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Must be a valid email!")
            .required("Required!"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short (8 characters minimum).")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
          rememberMe: Yup.boolean(),
        })}
        onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
          resetForm();
          setSubmitting(false);
          login(values.email, values.password, values.rememberMe, setStatus);
        }}
      >
        {(props) => (
          <Form className={styles.form}>
            <CustomInput type="text" name="email" label="Login" />
            <CustomInput type="password" name="password" label="Password" />
            <CustomCheckbox name="rememberMe">Remember me</CustomCheckbox>
            <Button className={styles.btn} type="submit">
              {props.isSubmitting ? "Loading..." : "Submit"}
            </Button>
            <div className={styles.error}>{props.status}</div>
          </Form>
        )}
      </Formik>
    </>
  );
};
type mapStateType = {
  isAuth: boolean;
};

const mapStateToProps = (state: RootStateType): mapStateType => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login: loginThunkCreator })(Login);
