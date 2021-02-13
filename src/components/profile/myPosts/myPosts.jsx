import cf from './myPosts.module.css';
import Post from './post/post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCounter} />)

  return (
    <div className={cf.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div  className={cf.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;