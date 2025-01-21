// src/Register.js
import React, { useContext, useState } from "react";
import { createUser } from "../auth/auth";
import { Link, Navigate } from "react-router-dom";
import classes from "../Modules/Register.module.css";
import Modal from "../components/Modal";
import { AuthContext } from "../store/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to={"/"} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      alert("Registration successful!");
      setShowModal(true);
    } catch (error) {
      setError(error.message);
      // alert(error.message);
    }
  };

  return (
    <div className={classes.Container}>
      {error && (
        <Modal title={"Error"} body={error} onClose={() => setError(null)} />
      )}
      {showModal && (
        <Modal title={"Error"} body={error} onClose={() => setError(false)} />
      )}
      <h1>Register</h1>
      <h3>Please fill in this form to create an account.</h3>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className={classes.submitButton} type="submit">
          Register
        </button>
      </form>
      <Link className={classes.loginText} to={"/login"}>
        You have an account ? <span>Login</span>{" "}
      </Link>
    </div>
  );
};

export default Register;
