import cf from './myPosts.module.css';
import Post from './post/post';

const MyPosts = () => {

  let posts = [
    { id: 1, message: "Hey there!", likesCounter: "12"},
    { id: 2, message: "My new message", likesCounter: "15"},
    { id: 3, message: "My new message", likesCounter: "14"},
    { id: 4, message: "My new message", likesCounter: "11"},
    { id: 5, message: "My new message", likesCounter: "17"},
    { id: 6, message: "My new message", likesCounter: "15"},
    { id: 7, message: "My new message", likesCounter: "14"},
    { id: 8, message: "My new message", likesCounter: "12"},
    { id: 9, message: "My new message", likesCounter: "15"}
  ]

  let postsElements = posts.map(p => <Post message={p.message} likesCounter={p.likesCounter} />)

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