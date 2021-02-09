import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Dialogs from './components/dialogs/dialogs';
import Profile from './components/profile/profile';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-content-wrapper">
        <Dialogs />
      </div>
      {/* <div className="app-content-wrapper">
      <Profile />
      </div> */}
    </div>
  );
}

export default App;