import React from "react";
// type checking with proptypes
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// Material UI usage of palette colors defined at theme level (App.js)
const useStyles = makeStyles((theme) => ({
  spacing: {
    marginTop: theme.spacing(2),
    "& p": {
      color: theme.palette.error.main
    }
  }
}));

const FormikField = ({
  name,
  label,
  type = "text",
  variant,
  data_cy,
  required = true
}) => {
  const classes = useStyles();
  return (
    <div className="Field">
      <Field
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        variant={variant}
        className={classes.spacing}
        fullWidth
        type={type}
        data-cy={data_cy}
        helperText={<ErrorMessage name={name} error />}
      />
    </div>
  );
};

export default FormikField;

// type checking validation PropTypes

FormikField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  data_cy: PropTypes.string,
  required: PropTypes.bool
};
