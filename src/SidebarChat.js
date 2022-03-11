import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState('');
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500))
  }, [])

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      // do something...
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://cdn2.thecatapi.com/images/${seed}.jpg`}/>
      <div className="sidebarChat__info">
        <h2>room name</h2>
        <p>last message</p>
      </div>
    </div>
  ): (
    <div onClick={createChat}
    className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat
