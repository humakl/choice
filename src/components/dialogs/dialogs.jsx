import { NavLink } from 'react-router-dom';
import cf from './dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={cf.dialogs}>
      <div className={cf.dialogsItems}>
        <div className={cf.dialog + ' ' + cf.active}>
          <NavLink to="/dialogs/1">Joe</NavLink>
        </div>
        <div className={cf.dialog}>
        <NavLink to="/dialogs/2">Chuck</NavLink>
        </div>
        <div className={cf.dialog}>
        <NavLink to="/dialogs/3">Bill</NavLink>
        </div>
        <div className={cf.dialog}>
        <NavLink to="/dialogs/4">Bob</NavLink>
        </div>
        <div className={cf.dialog}>
        <NavLink to="/dialogs/5">Nick</NavLink>
        </div>
      </div>
      <div className={cf.messages}>
        <div className={cf.message}>HI</div>
        <div className={cf.message}>Ni hai</div>
        <div className={cf.message}>Bye</div>
        <div className={cf.message}>Yio</div>
        <div className={cf.message}>kuku</div>
      </div>
    </div>
  )
}

export default Dialogs;