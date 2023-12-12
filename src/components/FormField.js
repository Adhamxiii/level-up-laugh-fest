import React from "react";
import { Field, ErrorMessage } from "formik";

const FormField = ({ name, placeholder, type }) => (
  <div className="form-field">
    <Field name={name} id={name} placeholder={placeholder} type={type} />
    <ErrorMessage name={name} component="div" className="error" />
  </div>
);

export default FormField;
