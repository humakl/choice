let rerenderEntireTree = () => {
  console.log("State was changed");
}

let state = {
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
}

export const addPost = () => {
  let newPost = {
    id: 6,
    message: state.profilePage.newPostText,
    likesCounter: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
}

export const updateNewPostText = (newtext) => {
  state.profilePage.newPostText = newtext;
  rerenderEntireTree(state);
}

export const addNewMessage = () => {
  let newMess = {
    id: 5,
    talker: "you",
    message: state.messagesPage.newMessageText
  };
  state.messagesPage.messages.push(newMess);
  state.messagesPage.newMessageText = "";
  rerenderEntireTree(state);
}

export const updateNewMessageText = (newMes) => {
  state.messagesPage.newMessageText = newMes;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;  
}

export default state;