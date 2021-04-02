import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
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

export default compose(
  connect(mapStateToProps, { updateNewMessageText, addNewMessage }),
  withAuthRedirect
)(Dialogs);