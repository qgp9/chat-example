import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';

export default function Frame() {
  return (
    <div className="frame">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}