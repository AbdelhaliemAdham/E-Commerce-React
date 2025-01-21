// src/Login.js
import React, { useContext, useState } from "react";
import { login } from "../auth/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import classes from "../Modules/Login.module.css";
import { AuthContext } from "../store/AuthContext";
import Modal from "../components/Modal";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to={"/"} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }
    setLoading(true);
    try {
      await login(email, password);
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
        <Modal title={"Error"} body={error} onClose={() => setError(false)} />
      )}
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
