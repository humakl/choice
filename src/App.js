import './App.css';
import Nav from './components/nav/nav';
import { Route } from 'react-router-dom';
import News from './components/news/news';
import Photos from './components/photos/photos';
import Settings from './components/settings/settings';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';


const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <div className="app-content-wrapper">
        <Route path="/profile/:userId?"
          render={() => <ProfileContainer />} />
        <Route path="/dialogs"
          render={() => <DialogsContainer />} />
        <Route path="/users"
          render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/photos" render={() => <Photos />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  )
}

export default App;