let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hey there!", likesCounter: "12" },
      { id: 2, message: "My new message", likesCounter: "15" },
      { id: 3, message: "My new message", likesCounter: "14" },
      { id: 4, message: "My new message", likesCounter: "11" },
      { id: 5, message: "My new message", likesCounter: "17" }
    ]
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
      { id: 1, message: "Hey there!" },
      { id: 2, message: "Let's do it!" },
      { id: 3, message: "We can achieve it!" },
      { id: 4, message: "Something went wrong?" },
    ]
  }
}

export default state;