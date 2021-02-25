import React from 'react';
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';
import DialogItem from './dialogItem/dialogItem';
import cf from './dialogs.module.css';
import Message from './message/message';


const Dialogs = (props) => {

  let dialogElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message} talker={m.talker} />)

  let addNewMessage = () => {
    props.dispatch(addNewMessageActionCreator());
  }

  let onMessageChange = (e) => {
    let Mess = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(Mess));
  }

  return (
    <div className={cf.dialogs}>
      <div className={cf.dialogsItems}>
        {dialogElements}
      </div>
      <div className={cf.messages}>
        {messagesElements}
        <div className={cf.newMessage}>
          <div>
            <textarea onChange={onMessageChange} value={props.messagesPage.newMessageText} />
          </div>
          <div>
            <button onClick={addNewMessage}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;