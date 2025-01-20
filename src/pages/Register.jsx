// src/Register.js
import React, { useState } from "react";
import { createUser } from "../auth/auth";
import { Link } from "react-router-dom";
import classes from "../Modules/Register.module.css";
import Modal from "../components/Modal";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

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
      {error && <Modal title={"Error"} body={error} />}
      {showModal && <Modal title={"Error"} body={error} />}
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
