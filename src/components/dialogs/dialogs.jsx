import React from 'react';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/formsControls';
import DialogItem from './dialogItem/dialogItem';
import cf from './dialogs.module.css';
import Message from './message/message';


const Dialogs = (props) => {

  let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)

  let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id} talker={m.talker} />)

  let addAnotherMessage = (values) => {
    props.addNewMessage(values.newMessageText);
  }

  if (!props.isAuth) return <Redirect to={'/login'} />;

  return (
    <div className={cf.dialogs}>
      <div className={cf.dialogsItems}>
        {dialogElements}
      </div>
      <div className={cf.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addAnotherMessage} />
      </div>
    </div>
  )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[required, maxLength50]} component={Textarea} name='newMessageText' placeholder='Enter your message' />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;