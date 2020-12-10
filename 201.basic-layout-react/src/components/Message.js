export default function Message({ message }) {
  return (
    <div className="message-container">
      <div className="message-avata">
        <img src={message.photoURL} alt="user avatar" />
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