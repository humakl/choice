import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import { required } from "../../utils/validators/validators"
import { Input } from "../common/FormsControls/formsControls"
import { login } from "../../redux/authReducer"
import { Redirect } from "react-router"
import cf from "../common/FormsControls/formsControls.module.css"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[required]} component={Input} name={'email'} placeholder={'Email'} />
      </div>
      <div>
        <Field validate={[required]} component={Input} name={'password'} type='password' placeholder={'Password'} />
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type={'checkbox'} />remember me
      </div>
      { props.error && <div className={cf.formError}>{props.error}</div>}
      <div>
        <button>Sign in</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);