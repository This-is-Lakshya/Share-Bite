import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import illRegister from '../../assets/illRegister.svg';
import './register.css';

const Register = () => {

  const navigateTo = useNavigate();

  const clickRegisterAsInd = ()=>{
    navigateTo('/registerAsIndividual');
  }

  const clickRegisterAsNGO = ()=>{
    navigateTo('/registerAsNGO');
  }

  return (
    <div className='Register'>
      <div className='register_box'>
        <div className='box_img'>
          <img src={illRegister} alt="" />
        </div>
        <div className='register_form'>
          <h2>Register</h2>
          <button onClick={clickRegisterAsInd} className="register_individual_btn">Register (Individual)</button>

          <div className='or_bisection'>
            <div className='line_around_or'></div>
            <p>or</p>
            <div className='line_around_or'></div>
          </div>

          <button onClick={clickRegisterAsNGO} className="register_ngo_btn">Register (NGOs)</button>
          <div className='dont_have_acc'>
            <h6>Already have an account?</h6>
            <NavLink to={''} >Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;