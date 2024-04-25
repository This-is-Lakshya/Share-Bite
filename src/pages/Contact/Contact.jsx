import React, { useRef, useState } from 'react';
import contactUs from '../../assets/contact_us.svg';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;

    if (!name || !email || !phone || !message) {
      setError(true);
      return;
    }

    emailjs
      .send(
        'service_j1dp93q',
        'template_tpi8eu9',
        {
          to_email: 'satyarthgupta004@gmail.com',
          from_name: name,
          from_email: email,
          from_phone: phone,
          message: message,
        },
        '2-E011kpHafscnFGM'
      )
      .then((response) => {
        console.log('Email sent successfully:', response.text);
        setSent(true);
        setError(false);
        // Reset the form
        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        messageRef.current.value = '';
      })
      .catch((error) => {
        console.error('Email send failed:', error);
      });
  };

  return (
    <div className='Contact'>
      <div className='contact_box'>
        <div className='contact_box_img'>
          <img src={contactUs} alt="" />
        </div>
        <div className='contact_form'>
          <h2>Contact</h2>
          {error && <p>Please fill all fields.</p>}
          {sent && <p>Email sent successfully!</p>}
          <input
            ref={nameRef}
            className='input_name'
            placeholder='Full Name'
            type="text"
          />
          <input
            ref={emailRef}
            className='input_email'
            placeholder='Email'
            type="email"
          />
          <input
            ref={phoneRef}
            className='input_mobile'
            placeholder='Mob. Number'
            type="text"
          />
          <textarea
            ref={messageRef}
            className='input_message'
            placeholder='Message'
            type="text"
          />
          <button className="send_msg" onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;