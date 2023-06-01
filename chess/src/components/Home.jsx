import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillCopy } from "react-icons/ai";

import "../styles/home.css";
const Home = () => {
  const [invite, setInvite] = useState(false);
  const navigate = useNavigate();
  const handleJoin = () => {
    navigate("/room/1");
    console.log("Joining the room");
  };
  const handleInvite = (e) => {
    e.preventDefault();
    // todo implement the invite functionality
    setInvite(true);
  };
  return (
    <>
      <h1 className="heading">Chess.io</h1>
      <div className="container-home">
        <div className="up">
          {invite ? (
            <>
              <AiFillCopy className="copy-icon" size={"16px"} />
              <input type="text" value={"fetch and show the socket link"} />
            </>
          ) : (
            <button
              className="btn-invite btn-join"
              onClick={(e) => handleInvite(e)}
            >
              invite
            </button>
          )}
        </div>
        <div className="down">
          <button className="btn-join" onClick={handleJoin}>
            Join the room
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
