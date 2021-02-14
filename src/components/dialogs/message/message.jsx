import cf from './../dialogs.module.css';


const Message = (props) => {
  return (
    <div className={cf.message}>{props.talker}: {props.message}</div>
  )
}

export default Message;