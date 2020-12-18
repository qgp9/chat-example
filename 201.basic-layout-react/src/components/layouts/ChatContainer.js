import {useEffect, useState, useRef} from 'react';
import Message from '../Message';

function ChatHeader() {
  return (
    <div className="chat-header">
      # random
    </div>
  );
}

function ChatMain({messages}) {
  const chatMainEl = useRef(null);
  useEffect(() => {
      setTimeout( () => chatMainEl.current.scrollTop = chatMainEl.current.scrollHeight, 0)
  }, [messages])
  return (
    <div className="chat-main" ref={chatMainEl}>
      {messages.map(msg => <Message message={msg} key={msg.created}/>)}
    </div>
  );
}

function ChatInput({addMessage}) {
  const enterHandler = event => {
    if (event.key === 'Enter') {
      addMessage({
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

function ChatContainer(props) {
  const [msgs, setMsgs] = useState([]);
  return (
    <div className="chat-container">
      <ChatHeader />
      <ChatMain messages={props.messages} />
      <ChatInput addMessage={props.addMessage} />
    </div>
  );
}

export default ChatContainer;