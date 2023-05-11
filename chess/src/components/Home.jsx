import React from 'react'
import { useNavigate } from 'react-router-dom';
import {AiFillCopy} from 'react-icons/ai'

import '../styles/home.css';
const Home = () => {
  const navigate = useNavigate();
  const handleJoin = () => {
    navigate('/room/:id')
    console.log('Joining the room')
  }
  return (
    <>
      <h1 className='heading'>Chess.io</h1>
    <div className='container-home'>
      <div className = "up">
        <AiFillCopy className='copy-icon' size={"16px"}/>
        <input type="text" value={"fetch and show the socket link"} />
      </div>
      <div className='down'>
        <button className='btn-join' onClick={handleJoin}>
          Join the room
        </button>
      </div>
    </div>
    </>
  )
}

export default Home
