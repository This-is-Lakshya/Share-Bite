import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import illLogin from '../../assets/illLogin.svg';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // You can access the logged-in user via userCredential.user
      console.log('User logged in successfully:', userCredential.user);
      // Reset form fields
      setEmail('');
      setPassword('');
      setError('');

      // sweetalert success
      Swal.fire({
        title: "Submited!",
        text: "You response is submitted",
        icon: "success"
      });

    } catch (error) {
      console.error('Error logging in:', error.message);
      setError(error.message);

      // sweetalert error
      Swal.fire({
        title: 'Error!',
        text: 'Failed to submit',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  };

  return (
    <div className='Login'>
      <div className='login_box'>
        <div className='box_img'>
          <img src={illLogin} alt="" />
        </div>
        <div className='login_form'>
          <h2>Login</h2>
          <input
            className='input_email'
            placeholder='Email'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='input_pass'
            placeholder='Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit" onClick={handleLogin}>Login</button>
          <div className='dont_have_acc'>
            <h6>Don't have an account?</h6>
            <NavLink to={'/register'}>Create Account</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
