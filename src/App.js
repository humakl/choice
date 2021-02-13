import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Dialogs from './components/dialogs/dialogs';
import Profile from './components/profile/profile';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/news/news';
import Photos from './components/photos/photos';
import Settings from './components/settings/settings';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-content-wrapper">
          <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>} />
          <Route path="/dialogs" render={() => <Dialogs state={props.state.messagesPage}/>} />
          <Route path="/news" render={() => <News />} />
          <Route path="/photos" render={() => <Photos />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;