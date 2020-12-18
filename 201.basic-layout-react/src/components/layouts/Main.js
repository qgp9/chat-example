import Sidebar from './Sidebar';
import ChatContainer from './ChatContainer';

function Main(props) {
  return (
    <div className="main">
      <Sidebar />
      <ChatContainer messages={props.messages} addMessage={props.addMessage} />
    </div>
  );
}

export default Main;