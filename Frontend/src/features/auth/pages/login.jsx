import React from "react";
import "./auth.scss";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login");
  };

  return (
    <main className="login-page">
      {/* Background Glow */}
      <div className="top-glow"></div>
      <div className="bottom-glow"></div>

      <div className="login-container">
        <h1 className="logo">LOGIN</h1>

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

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-text">
            Are You New Member?
            <span> Sign Up</span>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;