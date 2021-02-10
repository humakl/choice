import cf from './post.module.css';

const Post = (props) => {
  return (
    <div className={cf.item}>
      <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/138269628/original/070d20fea43d8e02a408eb6936c2f59b7009d747/do-some-avatar-icon-design.png"></img>
      {props.message}
      <div>
        <span>Like</span>
        {props.likesCounter}
      </div>
    </div>
  )
}

export default Post;