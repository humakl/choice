import MyPosts from './myPosts/myPosts';
// import cf from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}/>
    </div >
  )
}

export default Profile;