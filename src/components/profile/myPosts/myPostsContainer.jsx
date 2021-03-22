import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../redux/profileReducer';
import MyPosts from './myPosts';

// const MyPostsContainer = () => {

//   return (
//     <StoreContext.Consumer>
//       { store => {
//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         }

//         let onPostChange = (text) => {
//           store.dispatch(updateNewPostTextActionCreator(text));
//         }

//         return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
//       }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts);

export default MyPostsContainer;