import MyPosts from './myPosts/myPosts';
import cf from './profile.module.css';

const Profile = () => {
  return (
    <div>
      <img src="https://bit.ly/3r2SOUF"></img>
      <div>
        <img src="https://bit.ly/2YnTN5I" className={cf.ava}></img>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;