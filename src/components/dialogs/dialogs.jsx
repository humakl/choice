import React from 'react';
import DialogItem from './dialogItem/dialogItem';
import cf from './dialogs.module.css';
import Message from './message/message';


const Dialogs = (props) => {

  let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = props.state.messages.map(m => <Message message={m.message} talker={m.talker} />)

  let newMessageElement = React.createRef();

  let addNewMessage = () => {
    let newMessage = newMessageElement.current.value;
    alert(newMessage);
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
            <textarea ref={newMessageElement}></textarea>
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