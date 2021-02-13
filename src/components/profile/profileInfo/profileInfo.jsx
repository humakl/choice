import cf from './profileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://bit.ly/3r2SOUF" alt="info"></img>
      </div>
      <div className={cf.descriptionBlock}>
        <img src="https://bit.ly/2YnTN5I" alt="avatar" className={cf.ava}></img>
        ava + description
      </div >
    </div >
  )
}

export default ProfileInfo;