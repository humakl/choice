import React from 'react';
import cf from './myPosts.module.css';
import Post from './post/post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCounter} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div className={cf.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
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