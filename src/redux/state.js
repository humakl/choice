import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hey there!", likesCounter: "12" },
        { id: 2, message: "My new message", likesCounter: "15" },
        { id: 3, message: "My new message", likesCounter: "14" },
        { id: 4, message: "My new message", likesCounter: "11" },
        { id: 5, message: "My new message", likesCounter: "17" }
      ],
      newPostText: "asjest"
    },
    messagesPage: {
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
    },
    sidebar: {
      friendsName: [
        { id: 1, name: "Joe" },
        { id: 2, name: "Chuck" },
        { id: 3, name: "Bill" },
        { id: 4, name: "Bob" },
        { id: 5, name: "Nick" }
      ]
    }
  },
  _callSubscriber() {
    console.log("State was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {    // action - это объект, который описывает какое действие совершить. У этого объекта должно быть обязательно свойство "type", которое текстовое с названием действия

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);

  }
}

export default store;
window.store = store;