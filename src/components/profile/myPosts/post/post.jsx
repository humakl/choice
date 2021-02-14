import cf from './post.module.css';

const Post = (props) => {
  return (
    <div className={cf.item}>
      <img src="images/avatar-icon.jpg" alt="post avatar"></img>
      {props.message}
      <div>
        <span>Like</span>
        {props.likesCounter}
      </div>
    </div>
  )
}

export default Post;