import React from 'react';
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../storeContext';
import Dialogs from './dialogs';


const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addNewMessage = () => {
          store.dispatch(addNewMessageActionCreator());
        }

        let onMessageChange = (Mess) => {
          store.dispatch(updateNewMessageTextActionCreator(Mess));
        }

        return <Dialogs addNewMessage={addNewMessage} updateNewMessageText={onMessageChange} newMessageText={state.messagesPage.newMessageText} messages={state.messagesPage.messages} dialogs={state.messagesPage.dialogs} />
      }

      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;