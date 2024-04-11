import { NavLink } from 'react-router-dom';
import illLogin from '../../assets/illLogin.svg';
import './login.css';

const Login = () => {
  return (
    <div className='Login'>
      <div className='login_box'>
        <div className='box_img'>
          <img src={illLogin} alt="" />
        </div>
        <div className='login_form'>
          <h2>Login</h2>
          <input className='input_email' placeholder='Email' type="text" />
          <input className='input_pass' placeholder='Password' type="password" />
          <button className="submit">Login</button>
          <div className='dont_have_acc'>
            <h6>Don't have an account?</h6>
            <NavLink to={''} >Create Account</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;