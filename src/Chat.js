import './Chat.css';
import { Avatar, IconButton} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic'


function Chat() {
  const [input, setInput] = useState('');
  const [seed, setSeed] = useState('');
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500))
  }, [])

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("tecleaste " + input);
    setInput('');
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://cdn2.thecatapi.com/images/${seed}.jpg`} />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Ultimo mensaje</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

      </div>

      <div className="chat__body">
        <p className={`chat__message ${true && 'chat__reciever'}`}>
         <span className="chat__name">piero</span>hola gente
         <span className="chat__timestamp">22:00pm</span>
         </p>
        <p className="chat__message">hey chavales</p>
        <p className="chat__message">hey chavales</p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Escribe tu mensaje"
          type="text" />
          <button onClick={sendMessage} type="submit">Enviar mensaje</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
