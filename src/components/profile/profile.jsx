import MyPosts from './myPosts/myPosts';
import cf from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div >
  )
}

export default Profile;