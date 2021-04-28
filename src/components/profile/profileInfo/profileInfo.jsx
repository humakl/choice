import Preloader from '../../common/preloader/preloader';
import cf from './profileInfo.module.css';
import ProfileStatusWithHooks from './profileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      {/* <div>
        <img src="images/lakes.jpg" alt="info"></img>
      </div> */}
      <div className={cf.descriptionBlock}>
        <img src={profile.photos.small} alt="avatar" className={cf.ava}></img>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div >
    </div >
  )
}

export default ProfileInfo;