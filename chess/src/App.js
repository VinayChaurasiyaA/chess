import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SocketProvider } from "./Providers/Socket";
import { PeerProvider } from "./Providers/Peer";

import First from "./components/First";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Room from "./components/Room";

function App() {
  return (
    <Router>
      <SocketProvider>
        <PeerProvider>
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/room/:id" element={<Room />} />
            
          </Routes>
        </PeerProvider>
      </SocketProvider>
    </Router>
  );
}

export default App;
