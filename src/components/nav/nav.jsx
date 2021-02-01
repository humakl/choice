import cf from'./nav.module.css';

console.log(cf);

const Nav = () => {
  return <nav className={cf.nav}>
    <div className={cf.item}>
      t1
      <a href="#">Profile</a>
    </div>
    <div className={cf.item}>
      t2
      <a href="#">Messages</a>
    </div>
    <div className={`${cf.item} ${cf.active}`}>
      t3
      <a href="#">News</a>
    </div>
    <div className={cf.item}>
      t4
      <a href="#">Photos</a>
    </div>
  </nav>;
}

export default Nav;