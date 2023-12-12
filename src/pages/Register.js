import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormField from "../components/FormField"; // Import the FormField component

const Register = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    interests: Yup.string().required("Select at least one interest"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };

  return (
    <section className="register" id="register">
      <h1 className="register-title">It's Game Time - Register Now!</h1>
      <div className="register-content">
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            interests: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="form">
            <FormField name="username" placeholder="Username" type="text" />
            <FormField name="email" placeholder="Email" type="email" />
            <FormField name="password" placeholder="Password" type="password" />
            <FormField
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
            />
            <div className="form-field">
              <Field
                name="interests"
                placeholder="Gaming Interests"
                as="select"
              >
                <option value="" disabled hidden>
                  Select Gaming Interests
                </option>
                <option value="Action/Adventure Games">
                  Action/Adventure Games
                </option>
                <option value="Role-Playing Games (RPGs)">
                  Role-Playing Games (RPGs)
                </option>
                <option value="First-Person Shooter (FPS) Games">
                  First-Person Shooter (FPS) Games
                </option>
                <option value="Strategy Games">Strategy Games</option>
                <option value="Sports Games">Sports Games</option>
                <option value="Racing Games">Racing Games</option>
                <option value="Simulation Games">Simulation Games</option>
                <option value="Puzzle Games">Puzzle Games</option>
                <option value="Indie Games">Indie Games</option>
                <option value="Fighting Games">Fighting Games</option>
                <option value="MOBA (Multiplayer Online Battle Arena) Games">
                  MOBA (Multiplayer Online Battle Arena) Games
                </option>
                <option value="Card and Board Games">
                  Card and Board Games
                </option>
                <option value="Retro and Classic Games">
                  Retro and Classic Games
                </option>
                <option value="Horror Games">Horror Games</option>
                <option value="Survival Games">Survival Games</option>
                <option value="Sandbox Games">Sandbox Games</option>
                <option value="Virtual Reality (VR) Games">
                  Virtual Reality (VR) Games
                </option>
                <option value="Esports and Competitive Gaming">
                  Esports and Competitive Gaming
                </option>
                <option value="Casual Games">Casual Games</option>
                <option value="Mobile Games">Mobile Games</option>
              </Field>
            </div>
            <button type="submit" onClick={onsubmit}>
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Register;
