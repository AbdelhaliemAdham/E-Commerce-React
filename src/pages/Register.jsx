import React, { useContext, useState } from "react";
import { createUser } from "../auth/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import classes from "../Modules/Register.module.css";
import Modal from "../components/Modal";
import { AuthContext } from "../store/AuthContext";
import { useForm } from "react-hook-form";

const Register = () => {
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (user !== null) {
    return <Navigate to={"/"} />;
  }

  const handleSubmitData = async (data) => {
    try {
      await createUser(data.email, data.password);
      setShowModal(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={classes.Container}>
      {error && (
        <Modal title={"Error"} body={error} onClose={() => setError(null)} />
      )}

      {showModal && (
        <Modal
          title={"Successful"}
          body={"Account created successfully"}
          onClose={() => setShowModal(false)}
          onSuccess={() => navigate("/login")}
        />
      )}

      <h1>Register</h1>
      <h3>Please fill in this form to create an account.</h3>
      <form className={classes.form} onSubmit={handleSubmit(handleSubmitData)}>
        <input
          type="text"
          {...register("username", {
            required: "The username length must be between 6 and 20",
          })}
          placeholder="username"
        />
        <p className={classes.errors}>{errors.username?.message}</p>
        <input
          type="email"
          {...register("email", {
            required: "Invalid Email type",
            pattern: /^\S+@\S+$/i,
          })}
          placeholder="Email"
        />
        <p className={classes.errors}>{errors.email?.message}</p>

        <input
          type="password"
          {...register("password", {
            required: "The password length must be between 6 and 20",
            minLength: 6,
            maxLength: 20,
          })}
          placeholder="Password"
        />
        <p className={classes.errors}>{errors.password?.message}</p>

        <button className={classes.submitButton} type="submit">
          Register
        </button>
      </form>

      <Link className={classes.loginText} to={"/login"}>
        You have an account? <span>Login</span>
      </Link>
    </div>
  );
};

export default Register;
