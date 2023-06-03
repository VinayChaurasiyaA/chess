import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import { useSocket } from "../Providers/Socket";
const Homepage = () => {
  const [email, setEmail] = useState();
  const [room, setRoom] = useState();

  const { socket } = useSocket();
  const navigate = useNavigate();
  const handleOnClick = () => {
    socket.emit("join-room", { roomId: room, emailId: email });
  };
  const handleRoomJoined = useCallback(
    ({ roomId }) => {
      navigate(`/room/${roomId}`);
      // console.log("room joined", roomId);
    },
    [navigate]
  );
  useEffect(() => {
    socket.on("joined-room", handleRoomJoined);
    return () => {
      socket.off("joined-room", handleRoomJoined);
    };
  }, [socket]);
  //   socket.emit("join-room", { roomId: 1, emailId: "vinay@gmail.com" });
  return (
    <>
      <h1 className="heading">Chess.io</h1>
      <div className="container-home">
        <div className="up">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            type="text"
            placeholder="Enter the room ID"
            required
          />
          <button onClick={handleOnClick} className="btn-join">
            Enter
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
