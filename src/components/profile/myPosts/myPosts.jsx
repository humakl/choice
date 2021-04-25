import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/formsControls';
import cf from './myPosts.module.css';
import Post from './post/post';

const MyPosts = React.memo ( props => {

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
})

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newPostText' validate={[required, maxLength10]} placeholder="typing..." />
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