import React, { useCallback, useEffect, useState } from "react";
import ReactPlayer from "react-player";

import { useSocket } from "../Providers/Socket";
import { usePeer } from "../Providers/Peer";
const Videocallroom = () => {
  const [myStream, setMyStream] = useState(null);
  const [remoteEmailId, setRemoteEmailId] = useState();

  const { socket } = useSocket();
  const {
    peer,
    createOffer,
    createAnswer,
    setRemoteAns,
    sendStream,
    remoteStream,
  } = usePeer();

  const handleNewUser = useCallback(
    async (data) => {
      const { emailId } = data;
      console.log("New user joined", emailId);
      const offer = await createOffer();
      socket.emit("call-user", { emailId, offer });
      setRemoteEmailId(emailId);
    },
    [createOffer, socket]
  );
  const handleIncommingCall = useCallback(
    async (data) => {
      const { from, offer } = data;
      console.log("Incomming call ", from, offer);
      const ans = await createAnswer(offer);
      socket.emit("call-accepted", { emailId: from, ans });
      setRemoteEmailId(from);
    },
    [createAnswer, socket]
  );

  const handleCallAccepted = useCallback(
    async (data) => {
      const { ans } = data;
      console.log("Call acccepted", ans);
      await setRemoteAns(ans);
    },
    [setRemoteAns]
  );
  const getUserMediaStream = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    setMyStream(stream);
  }, []);
  const handleNegociation = useCallback(() => {
    console.log("OOps neg required");
    const localOffer = peer.localDescription;
    socket.emit("call-user" , {emailId : remoteEmailId , offer : localOffer})
  } , [peer.localDescription, remoteEmailId, socket]);

  useEffect(() => {
    socket.on("user-joined", handleNewUser);
    socket.on("incomming-call", handleIncommingCall);
    socket.on("call-accepted", handleCallAccepted);

    return () => {
      socket.off("user-joined", handleNewUser);
      socket.off("incomming-call", handleIncommingCall);
      socket.off("call-accepted", handleCallAccepted);
    };
  }, [socket, handleNewUser, handleIncommingCall, handleCallAccepted]);

  useEffect(() => {
    getUserMediaStream();
  }, [getUserMediaStream]);

  useEffect(() => {
    peer.addEventListener("negotiationneeded" , handleNegociation);

    return () => {
    peer.removeEventListener("negotiationneeded" , handleNegociation);

    }
  })
  return (
    <div>
      <h1>RoomPage</h1>
      <h3>You are connected to {remoteEmailId}</h3>
      <button onClick={(e) => sendStream(myStream)}>Send Stream</button>
      <ReactPlayer url={myStream} playing />
      <ReactPlayer url={remoteStream} playing />

      {/* </ReactPlayer> */}
    </div>
  );
};

export default Videocallroom;
