function Sidebar() {
  return (
    <aside className="sidebar">
      sidebar
    </aside>
  );
}

function  ChatHeader() {
  return (
    <div className="chat-header">
      # random
    </div>
  );
}

function Message({message}) {
  return (
    <div className="message-container">
      <div className="message-avata">
        <img src={message.photoURL} />
      </div>
      <div className="message-body">
        <div className="message-name">
          {message.displayName}
        </div>
        <div className="message-date">
          {message.created}
        </div>
        <div className="message-content">
          {message.content}
        </div>
      </div>
    </div>
  )
}

function ChatMain() {
  const msg = {
    displayName: 'Beomsu Chang',
    photoURL: 'img/avatar-thumb-paul9.jpeg',
    created: '8:11 AM',
    content: '이것은 메시지입니다.'
  }
  return (
    <div className="chat-main">
      <Message message={msg}/>
      <Message message={msg}/>
    </div>
  );
}

function ChatInput() {
  return (
    <div className="chat-input-box">
      <div className="chat-input-quick-button">
        <i class="far fa-bolt"></i>
      </div>
      <div className="chat-input-container">
        <input type="text" className="chat-input" />
      </div>
    </div>
  )
}

function ChatContainer() {
  return (
    <div className="chat-container">
      <ChatHeader />
      <ChatMain />
      <ChatInput />
    </div>
  );
}

export default function Main() {
  return (
    <div className="main">
      <Sidebar />
      <ChatContainer />
    </div>
    );
}