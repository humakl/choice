import { NavLink } from 'react-router-dom';
import Friends from './friends/friends';
import cf from './nav.module.css';

const Nav = (props) => {

  let friendsElements = props.state.friendsName.map(f => <Friends name={f.name} />)

  return (
    <nav className={cf.nav}>
      <div className={cf.item}>
        <NavLink to="/profile" activeClassName={cf.activelink}>Profile</NavLink>
      </div>
      <div className={cf.item}>
        <NavLink to="/dialogs" activeClassName={cf.activelink}>Messages</NavLink>
      </div>
      <div className={cf.item}>
        <NavLink to="/news" activeClassName={cf.activelink}>News</NavLink>
      </div>
      <div className={cf.item}>
        <NavLink to="/photos" activeClassName={cf.activelink}>Photos</NavLink>
      </div>
      <div className={cf.item}>
        <NavLink to="settings" activeClassName={cf.activelink}>Settings</NavLink>
      </div>
      <br/><br/>
      <h3>Friends</h3>
      {friendsElements}
    </nav>
    
  )
}

export default Nav;