import cf from './myPosts.module.css';
import Post from './post/post';

const MyPosts = () => {
  return <div>
    My posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div>
      <Post message="Hey there" likesCounter="12" />
      <Post message="My new message" likesCounter = "15" />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
}

export default MyPosts;