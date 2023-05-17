import React from "react";

import "../styles/login.css";
const Login = () => {
  return (
    <>
      <h3>Login</h3>
      <div className="hero">
        <form action="">
          <label htmlFor="name">Username</label>
          <input type="text" id="name" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button
            onClick={
              "TODO : CHECK WHETHER USER EXIST IF YES NAVIGATE HIM TO HOME PAGE"
            }
          >
            Login
          </button>
          <p>
            Don't have an account? <a href="/signup">{" "} Signup</a>
          </p>
          <h5>Or</h5>
          <button >
            Login with Google
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
