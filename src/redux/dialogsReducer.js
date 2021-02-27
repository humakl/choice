const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let newMess = {
        id: 5,
        talker: "you",
        message: state.newMessageText
      };
      state.messages.push(newMess);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMes;
      return state;
    default:
      return state;
  }
}

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });

export const updateNewMessageTextActionCreator = (Mess) => (
  { type: UPDATE_NEW_MESSAGE_TEXT, newMes: Mess });

export default dialogsReducer;