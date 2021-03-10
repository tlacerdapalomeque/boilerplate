import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikField from "../components/forms/FormikField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Loader from "../components/notifications/Loader";
import { login } from "../state/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const initialValues = {
  email: "",
  password: ""
};

// Yup validation Schema for Login
// Clarification: Email and Password min | max | matches message displays generic error
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .max(64, "Invalid Email")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Invalid Password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Invalid Password"
    )
    .max(20, "Invalid Password")
    .required("Required")
});

// Material UI usage of theme for consistent spacing base on 8px
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    height: "100vh"
  },
  form: {
    width: "100%" // Fix IE 11 issue.
  },
  button: {
    marginTop: theme.spacing(4),
    height: theme.spacing(6)
  }
}));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  const { isLoading, isAuthenticated } = useSelector(
    (state) => state.authentication
  );

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <div className={classes.form}>
        <Typography component="h1" variant="h6" gutterBottom>
          Sign in to your account
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={LoginSchema}
        >
          {({ dirty, isValid }) => {
            return (
              <Form>
                <FormikField
                  name="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  data_cy="email"
                  required
                />
                <FormikField
                  name="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  data_cy="password"
                  required
                />

                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  disabled={!dirty || !isValid}
                  type="submit"
                  fullWidth
                  size="large"
                  data-cy="submit"
                >
                  {isLoading ? <Loader isLoading={true} /> : "sign in"}
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
}
