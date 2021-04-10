const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

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
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 5, talker: "you", message: action.newMessageText }]
      }
    default:
      return state;
  }
}

export const addNewMessage = (newMessageText) => ({ type: ADD_NEW_MESSAGE, newMessageText });


export default dialogsReducer;