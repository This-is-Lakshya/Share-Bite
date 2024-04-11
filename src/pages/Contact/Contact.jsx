import {TextField} from '@mui/material';
import contactUs from '../../assets/contact_us.svg';
import './contact.css';

const Contact = () => {
  return (
    <div className='Contact'>
      <div className='contact_box'>
        <div className='contact_box_img'>
          <img src={contactUs} alt="" />
        </div>
        <div className='contact_form'>
          <h2>Contact</h2>
          <input className='input_name' placeholder='Full Name' type="text" />
          <input className='input_email' placeholder='Email' type="email" />
          <input className='input_mobile' placeholder='Mob. Number' type="text" />
          <textarea className='input_message' placeholder='Message' type="text" />
          <button className="send_msg">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact;