import { NavLink } from 'react-router-dom';
import cf from './nav.module.css';

const Nav = () => {
  return (
    <nav className={cf.nav}>
      <div className={cf.item}>
        <NavLink to="/profile" activeClassName={cf.activelink}>Profile</NavLink>
      </div>
      <div className={cf.item}>
        <NavLink to="/dialogs" activeClassName={cf.activelink}>Messages</NavLink>
      </div>
      <div className={`${cf.item} ${cf.active}`}>
        <NavLink to="/news" activeClassName={cf.activelink}>News</NavLink>
      </div>
      <div className={cf.item}>
        <NavLink to="/photos" activeClassName={cf.activelink}>Photos</NavLink>
      </div>
      <div className={cf.item}>
        <NavLink to="settings" activeClassName={cf.activelink}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Nav;