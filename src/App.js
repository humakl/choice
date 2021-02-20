import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Dialogs from './components/dialogs/dialogs';
import Profile from './components/profile/profile';
import { Route } from 'react-router-dom';
import News from './components/news/news';
import Photos from './components/photos/photos';
import Settings from './components/settings/settings';


const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <Nav state={props.state.sidebar} />
      <div className="app-content-wrapper">
        <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />
        <Route path="/dialogs" render={() => <Dialogs messagesPage={props.state.messagesPage} addNewMessage={props.addNewMessage} updateNewMessageText={props.updateNewMessageText} />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/photos" render={() => <Photos />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  )
}

export default App;