const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: "Hey there!", likesCounter: "12" },
    { id: 2, message: "My new message", likesCounter: "15" },
    { id: 3, message: "My new message", likesCounter: "14" },
    { id: 4, message: "My new message", likesCounter: "11" },
    { id: 5, message: "My new message", likesCounter: "17" }
  ],
  newPostText: "asjest"
}

const profileReducer = (state = initialState, action) => {

  let stateCopy = { 
    ...state,
    posts: [...state.posts]
   };

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: state.newPostText,
        likesCounter: "0"
      };
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    case UPDATE_NEW_POST_TEXT:
      stateCopy.newPostText = action.newText;
      return stateCopy;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => (
  { type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;