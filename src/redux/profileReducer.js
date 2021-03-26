const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  posts: [
    { id: 1, message: 'Hey there!', likesCounter: '12' },
    { id: 2, message: 'My new message', likesCounter: '15' },
    { id: 3, message: 'My new message', likesCounter: '14' },
    { id: 4, message: 'My new message', likesCounter: '11' },
    { id: 5, message: 'My new message', likesCounter: '17' }
  ],
  newPostText: 'asjest',
  profile: null
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: state.newPostText, likesCounter: '3'}],
        newPostText: ''
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state;
  }
}

export const addPost = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;