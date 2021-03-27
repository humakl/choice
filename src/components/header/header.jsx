import { NavLink } from 'react-router-dom';
import cf from './header.module.css';

const Header = (props) => {
  return (
    <header className={cf.header}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo"></img>

      <div className={cf.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header;