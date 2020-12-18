import {useState, useEffect} from 'react'
import Frame from './components/layouts/Frame';
import './style.css';
import './App.css';


import './configs/firebase';
import AuthModel from './models/auth';
import chatModel from './models/chat';

const auth = new AuthModel();

function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const logout = auth.logout.bind(auth);
  const addMessage = chatModel.addMessage.bind(chatModel);

  useEffect(() => {
    auth.updateHandler = (user) => setUser(user);
    auth.init();
  }, [])

  useEffect(() => {
    chatModel.onUpdate = (messages) => setMessages(messages);
    chatModel.subscribe();
    return () => chatModel.unsubcribe();
  }, [user])

  return (
    <div className="App">
      <Frame
        user={user}
        logout={logout}
        messages={messages}
        addMessage={addMessage}
      />
    </div>
  );
}

export default App;
