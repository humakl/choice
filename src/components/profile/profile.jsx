import MyPosts from './myPosts/myPosts';
// import cf from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>
    </div >
  )
}

export default Profile;