let initialState = {
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

const sidebarReducer = (state = initialState, action) => {


  return state;
}

export default sidebarReducer;