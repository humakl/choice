import Preloader from '../../common/preloader/preloader';
import cf from './profileInfo.module.css';
import ProfileStatus from './profileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      {/* <div>
        <img src="images/lakes.jpg" alt="info"></img>
      </div> */}
      <div className={cf.descriptionBlock}>
        <img src={props.profile.photos.small} alt="avatar" className={cf.ava}></img>
        <ProfileStatus status={props.status} />
      </div >
    </div >
  )
}

export default ProfileInfo;