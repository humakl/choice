import { connect } from 'react-redux';
import { addNewMessage, updateNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './dialogs';


// const DialogsContainer = () => {

//   return (
//     <StoreContext.Consumer>
//       { store => {
//         let state = store.getState();

//         let addNewMessage = () => {
//           store.dispatch(addNewMessageActionCreator());
//         }

//         let onMessageChange = (Mess) => {
//           store.dispatch(updateNewMessageTextActionCreator(Mess));
//         }

//         return <Dialogs addNewMessage={addNewMessage}
//           updateNewMessageText={onMessageChange}
//           newMessageText={state.messagesPage.newMessageText}
//           messages={state.messagesPage.messages}
//           dialogs={state.messagesPage.dialogs} />
//       }

//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  // передает данные через props в компоненту Dialogs;
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText
  }
}

const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, addNewMessage})(Dialogs);


export default DialogsContainer;