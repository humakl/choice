import cf from './profileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="images/lakes.jpg" alt="info"></img>
      </div>
      <div className={cf.descriptionBlock}>
        <img src="images/puffin.jpg" alt="avatar" className={cf.ava}></img>
        ava + description
      </div >
    </div >
  )
}

export default ProfileInfo;