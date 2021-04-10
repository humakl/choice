import React from 'react';
import { Field, reduxForm } from 'redux-form';
import cf from './myPosts.module.css';
import Post from './post/post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCounter={p.likesCounter} />)

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={cf.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={cf.posts}>
        {postsElements}
      </div>
    </div>
  )
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newPostText' />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({
  form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts;