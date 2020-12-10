import {useState} from 'react';
import Message from '../Message';

function ChatHeader() {
  return (
    <div className="chat-header">
      # random
    </div>
  );
}

function ChatMain({msgs}) {
  return (
    <div className="chat-main">
      {msgs.map(msg => <Message message={msg} key={msg.created}/>)}
    </div>
  );
}

function ChatInput({addMsg}) {
  const enterHandler = event => {
    if (event.key === 'Enter') {
      addMsg({
        displayName: 'Beomsu Chang',
        photoURL: '/img/avatar-thumb-paul9.jpeg',
        created: Date.now(),
        content: event.target.value,
      })
      event.target.value = '';
    }
  };
  return (
    <div className="chat-input-box">
      <div className="chat-input-quick-button">
        <i className="far fa-bolt"></i>
      </div>
      <div className="chat-input-container">
        <input type="text" className="chat-input" onKeyPress={enterHandler} />
      </div>
    </div>
  );
}

function ChatContainer() {
  const [msgs, setMsgs] = useState([]);
  const addMsg = (msg) => setMsgs(prev => [...prev, msg]);
  return (
    <div className="chat-container">
      <ChatHeader />
      <ChatMain msgs={msgs} />
      <ChatInput addMsg={addMsg} />
    </div>
  );
}

export default ChatContainer;