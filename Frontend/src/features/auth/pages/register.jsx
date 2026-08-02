import React from "react";
import { Link } from "react-router";
import "./auth.scss";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register");
  };

  return (
    <main className="auth-page">
      <div className="top-glow"></div>
      <div className="bottom-glow"></div>

      <div className="auth-container">
        <h1 className="logo">SPACE</h1>

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>

            <input
              type="text"
              id="name"
              placeholder="Aryan Dixit"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              placeholder="••••••••••••"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••••••"
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            Create Account
          </button>

          <p className="switch-page">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;