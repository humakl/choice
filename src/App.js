import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Dialogs from './components/dialogs/dialogs';
import Profile from './components/profile/profile';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/news/news';
import Photos from './components/photos/photos';
import Settings from './components/settings/settings';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-content-wrapper">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/photos" component={Photos} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;