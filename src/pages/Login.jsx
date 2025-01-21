// src/Login.js
import React, { useContext, useState } from "react";
import { login } from "../auth/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import classes from "../Modules/Login.module.css";
import { AuthContext } from "../store/AuthContext";
import Modal from "../components/Modal";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (user !== null) {
    return <Navigate to={"/"} />;
  }

  const handleSubmitData = async (data) => {
    setLoading(true);
    try {
      await login(data.email, data.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.pageContainer}>
      <h1>Login</h1>
      {error && (
        <Modal title={"Error"} body={error} onClose={() => setError(null)} />
      )}
      {showModal && (
        <Modal
          title={"Error"}
          body={error}
          onClose={() => setShowModal(false)}
        />
      )}
      <form className={classes.form} onSubmit={handleSubmit(handleSubmitData)}>
        <input
          {...register("email", {
            required: "Invalid Email type",
            pattern: /^\S+@\S+$/i,
          })}
          type="email"
          placeholder="Email"
        />
        <p className={classes.validation}>{errors.email?.message}</p>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password should be at least 6 characters",
            },
            maxLength: {
              value: 20,
              message: "Password should not exceed 20 characters",
            },
          })}
          type="password"
          placeholder="Password"
        />
        <p className={classes.validation}>{errors.password?.message}</p>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className={classes.register}>
        don't have an account ? <Link to={"/register"}>Register</Link>
      </p>
    </div>
  );
};
export default LoginPage;
