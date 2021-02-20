import React from 'react';
import DialogItem from './dialogItem/dialogItem';
import cf from './dialogs.module.css';
import Message from './message/message';


const Dialogs = (props) => {

  let dialogElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message} talker={m.talker} />)

  let newMessageElement = React.createRef();

  let onMessageChange = () => {
    let Mess = newMessageElement.current.value;
    props.updateNewMessageText(Mess);
  }

  let addNewMessage = () => {
    props.addNewMessage();
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
            <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText} />
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