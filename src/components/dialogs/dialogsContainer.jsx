import React from 'react';
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './dialogs';


const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addNewMessage = () => {
    props.store.dispatch(addNewMessageActionCreator());
  }

  let onMessageChange = (Mess) => {
    props.store.dispatch(updateNewMessageTextActionCreator(Mess));
  }

  return <Dialogs addNewMessage={addNewMessage} updateNewMessageText={onMessageChange} newMessageText={state.messagesPage.newMessageText} messages={state.messagesPage.messages} dialogs={state.messagesPage.dialogs} />
}

export default DialogsContainer;