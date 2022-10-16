import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import s from "./Register.module.css";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      await axios.post("http://localhost:5000/api/auth/login", {
        username,
        email,
        password,
      });
    }
  };
  const handleValidation = () => {
    if (password !== confirmPassword) {
      toast.error("Password and confirm password should be same", toastOptions);
      return false;
    } else if (password.length < 6) {
      toast.error("Password should be greater than 6 characters", toastOptions);
      return false;
    } else if (username.length < 3) {
      toast.error("Username should be greater than 3 characters", toastOptions);
      return false;
    } else if (email.trim() === "") {
      toast.error("email must be provided", toastOptions);
      return false;
    }
    return true;
  };
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <div className={s.divContainer}>
        <form onSubmit={(e) => handleSubmit(e)} className={s.form}>
          <div>
            <h1 className={s.title}>chat</h1>
          </div>
          <input
            name="username"
            className={s.input}
            type="text"
            placeholder="Username"
            onChange={(e) => handleChange(e)}
          />
          <input
            name="email"
            className={s.input}
            type="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
          <input
            name="password"
            className={s.input}
            type="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
          <input
            name="confirmPassword"
            className={s.input}
            type="password"
            placeholder="Confirm password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className={s.button}>
            Create User
          </button>
          <span className={s.span}>
            Already have an account?{" "}
            <Link to="/login" className={s.a}>
              Login
            </Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
// import { Formik, Form, Field, ErrorMessage } from "formik";
// const initialValues = {
//     email: "",
//     Username: "",
//     password: "",
//   };
//   const handleSubmit = async ({ email, Username, password }) => {
//     console.log(email, Username, password);
//   };
// <Formik onSubmit={handleSubmit} initialValues={initialValues}>
//   <Form>
//     <label htmlFor="email">Email</label>
//     <Field name="email" type="email" />
//     <ErrorMessage name="email" />

//     <label htmlFor="Username">Username</label>
//     <Field name="Username" type="text" />
//     <ErrorMessage name="Username" />

//     <label htmlFor="password">Password</label>
//     <Field name="password" type="text" />
//     <ErrorMessage name="password" />

//     <button type="submit">Submit</button>
//   </Form>
// </Formik>
export default Register;
