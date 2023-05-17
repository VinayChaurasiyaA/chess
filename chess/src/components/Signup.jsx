import React from "react";

const Signup = () => {
  return (
    <>
      <h3>Signup</h3>
      <div className="hero">
        <form action="">
          <label htmlFor="name">Username</label>
          <input type="text" id="name" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button
            onSubmit={"TODO :Stroe username and password in the database"}
          >
            Login
          </button>
          <p>
            Already have an account?{" "}
            <a style={{ marginLeft: "8px" }} href="/login">
              {" "}
              Login
            </a>
          </p>
          {/* <h5>Or</h5>
          <button >
            Login with Google
          </button> */}
        </form>
      </div>
    </>
  );
};

export default Signup;
