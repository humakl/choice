import { connect } from "react-redux"
import { reduxForm } from "redux-form"
import { required } from "../../utils/validators/validators"
import { createField, Input } from "../common/FormsControls/formsControls"
import { login } from "../../redux/authReducer"
import { Redirect } from "react-router"
import cf from "../common/FormsControls/formsControls.module.css"

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required], Input)}
      {createField('Password', 'password', [required], Input, { type: 'password' })}
      {createField(null, 'rememberMe', null, Input, { type: 'checkbox' }, 'remember me')}

      { error && <div className={cf.formError}>{error}</div>}
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