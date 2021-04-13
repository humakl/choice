import './App.css';
import Nav from './components/nav/nav';
import { Route, withRouter } from 'react-router-dom';
import News from './components/news/news';
import Photos from './components/photos/photos';
import Settings from './components/settings/settings';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';
import LoginPage from './components/login/login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from "./redux/appReducer";
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

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
          <Route path="/login"
            render={() => <LoginPage />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/photos" render={() => <Photos />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);