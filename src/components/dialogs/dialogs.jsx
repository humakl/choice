import { NavLink } from 'react-router-dom';
import cf from './dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={cf.dialog + ' ' + cf.active}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={cf.active}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={cf.message}>{props.message}</div>
  )
}

const Dialogs = () => {

  let dialogs = [
    { id: 1, name: "Joe" },
    { id: 2, name: "Chuck" },
    { id: 3, name: "Bill" },
    { id: 4, name: "Bob" },
    { id: 5, name: "Nick" }
  ]

  let messagess = [
    { id: 1, message: "Hey there!" },
    { id: 2, message: "Let's do it!" },
    { id: 3, message: "We can achieve it!" },
    { id: 4, message: "Something went wrong?" },
  ]

  let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = messagess.map(m => <Message message={m.message} />)

  return (
    <div className={cf.dialogs}>
      <div className={cf.dialogsItems}>
        {dialogElements}
      </div>
      <div className={cf.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;