import Preloader from '../../common/preloader/preloader';
import cf from './profileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  debugger;
  return (
    <div>
      <div>
        <img src="images/lakes.jpg" alt="info"></img>
      </div>
      <div className={cf.descriptionBlock}>
        <img src={props.profile.photos.small} alt="avatar" className={cf.ava}></img>
        ava + description
      </div >
    </div >
  )
}

export default ProfileInfo;