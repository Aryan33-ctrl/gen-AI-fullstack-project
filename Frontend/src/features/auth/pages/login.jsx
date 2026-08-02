import React from "react";
import { Link } from "react-router";
import "./auth.scss";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login");
  };

  return (
    <main className="auth-page">
      <div className="top-glow"></div>
      <div className="bottom-glow"></div>

      <div className="auth-container">
        <h1 className="logo">SPACE</h1>

        <h2>Welcome Back</h2>

        <form onSubmit={handleSubmit}>
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

          <div className="forgot-password">
            <a href="/">Forgot Password?</a>
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>

          <p className="switch-page">
            Are You New Member?{" "}
            <Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;