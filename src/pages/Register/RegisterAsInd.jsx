import { NavLink } from 'react-router-dom';
import illRegister from '../../assets/illRegister.svg';
import './register.css';

const RegisterAsInd = () => {
  return (
    <div className='RegisterAsInd'>
      <div className='registerInd_box'>
        <div className='box_img'>
          <img src={illRegister} alt="" />
        </div>
        <div className='registerInd_form'>
          <h2>Register</h2>
          <input className='input_name' placeholder='Full Name' type="text" />
          <input className='input_email' placeholder='Email' type="text" />
          <input className='input_pass' placeholder='Password' type="password" />
          <input className='input_pass' placeholder='Confirm Password' type="password" />
          <button className="submit">Register</button>
          <div className='dont_have_acc'>
            <h6>Already have an account?</h6>
            <NavLink to={'/login'} >Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterAsInd; 