import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import { Route } from 'react-router-dom';
import News from './components/news/news';
import Photos from './components/photos/photos';
import Settings from './components/settings/settings';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/users/usersContainer';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-content-wrapper">
        <Route path="/profile"
          render={() => <Profile />} />
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