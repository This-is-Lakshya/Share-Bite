import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import illRegister from '../../assets/illRegister.svg';
import './register.css';

const RegisterAsInd = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // You can access the newly created user via userCredential.user
      console.log('User registered successfully:', userCredential.user);
      // Reset form fields
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');

      // sweetalert success
      Swal.fire({
        title: "Submited!",
        text: "You response is submitted",
        icon: "success"
      });

    } catch (error) {
      console.error('Error registering user:', error.message);
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
    <div className='RegisterAsInd'>
      <div className='registerInd_box'>
        <div className='box_img'>
          <img src={illRegister} alt="" />
        </div>
        <div className='registerInd_form'>
          <h2>Register</h2>
          <input
            className='input_name'
            placeholder='Full Name'
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
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
          <input
            className='input_pass'
            placeholder='Confirm Password'
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="submit" onClick={handleRegister}>Register</button>
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