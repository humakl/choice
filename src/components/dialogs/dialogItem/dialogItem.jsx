import { NavLink } from 'react-router-dom';
import cf from './../dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={cf.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={cf.active}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;