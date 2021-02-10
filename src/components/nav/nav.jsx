import cf from './nav.module.css';

const Nav = () => {
  return (
    <nav className={cf.nav}>
      <div className={cf.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={cf.item}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={`${cf.item} ${cf.active}`}>
        <a href="/news">News</a>
      </div>
      <div className={cf.item}>
        <a href="/photos">Photos</a>
      </div>
      <div className={cf.item}>
        <a href="settings">Settings</a>
      </div>
    </nav>
  )
}

export default Nav;