const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    { id: 1, name: "Joe" },
    { id: 2, name: "Chuck" },
    { id: 3, name: "Bill" },
    { id: 4, name: "Bob" },
    { id: 5, name: "Nick" }
  ],
  messages: [
    { id: 1, talker: "me", message: "Hey there!" },
    { id: 2, talker: "you", message: "Let's do it!" },
    { id: 3, talker: "you", message: "We can achieve it!" },
    { id: 4, talker: "me", message: "Something went wrong?" },
  ],
  newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

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