import './App.css';
import Header from './components/header/header';
import Profile from './components/profile/profile';
import Nav from './components/nav/nav';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />

    </div>
  );
}

export default App;