import React from "react";

import "../styles/first.css";
const First = () => {
  return (
    <>
      <h1>Chess.io</h1>
      <div className="first-container">
        <div className="first">
          <button>
            <a href="/login">Login</a>
          </button>
          <button>
            <a href="/signup">Signup</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default First;
