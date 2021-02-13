import cf from './../dialogs.module.css';


const Message = (props) => {
  return (
    <div className={cf.message}>{props.message}</div>
  )
}

export default Message;