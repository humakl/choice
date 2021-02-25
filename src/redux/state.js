const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 6,
        message: this._state.profilePage.newPostText,
        likesCounter: "0"
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } 
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } 
    else if (action.type === ADD_NEW_MESSAGE) {
      let newMess = {
        id: 5,
        talker: "you",
        message: this._state.messagesPage.newMessageText
      };
      this._state.messagesPage.messages.push(newMess);
      this._state.messagesPage.newMessageText = "";
      this._callSubscriber(this._state);
    } 
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.newMes;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => (
  {type: UPDATE_NEW_POST_TEXT, newText: text});

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});

export const updateNewMessageTextActionCreator = (Mess) => (
  {type: UPDATE_NEW_MESSAGE_TEXT, newMes: Mess});

export default store;
window.store = store;