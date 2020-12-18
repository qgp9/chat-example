import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';
import Login from '../Login';

export default function Frame(props) {
  return (
    <div className="frame">
      <NavBar user={props.user} logout={props.logout} />
      {!props.user?
        <Login />
        :
        <Main messages={props.messages} addMessage={props.addMessage}/>
      }
      <Footer />
    </div>
  );
}