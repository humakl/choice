import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addNewMessage } from '../../redux/dialogsReducer';
import Dialogs from './dialogs';

let mapStateToProps = (state) => {
  // передает данные через props в компоненту Dialogs;
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: (newMessageText) => {
      dispatch(addNewMessage(newMessageText));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);