import React from 'react';
import cf from './myPosts.module.css';
import Post from './post/post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCounter} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
  }

  return (
    <div className={cf.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={cf.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;