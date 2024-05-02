import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './requestGenForm.css';

const RequestGenForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [cookedTime, setCookedTime] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [requestStatus, setRequestStatus] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleFoodTypeChange = (e) => setFoodType(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handleCookedTimeChange = (e) => setCookedTime(e.target.value);
  const handleTermsAcceptedChange = (e) => setTermsAccepted(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert('Please accept the terms & conditions');
      return;
    }

    if (!name.trim() || !email.trim() || !address.trim() || !foodType.trim() || !quantity.trim() || !cookedTime.trim()) {
      alert('Please fill out all fields');
      return;
    }

    const requestData = {
      name,
      email,
      address,
      foodType,
      quantity,
      cookedTime,
      status: 'Pending' // Initial status
    };

    const db = getDatabase();
    const requestsRef = ref(db, 'requests');
    push(requestsRef, requestData)
      .then(() => {
        setRequestStatus('Request submitted successfully');
        // Reset form fields
        setName('');
        setEmail('');
        setAddress('');
        setFoodType('');
        setQuantity('');
        setCookedTime('');
        setTermsAccepted(false);

        Swal.fire({
          title: "Submited!",
          text: "You response is submitted",
          icon: "success"
        });
      })
      .catch((error) => {
        console.error('Error submitting request:', error);
        setRequestStatus('Failed to submit request');

        // sweetalert error
        Swal.fire({
          title: 'Error!',
          text: 'Failed to submit',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      });
  };

  return (
    <div className='RegisterAsReq'>
      <div className='outer_border_registerReq'>
        
        <div className='inner_box_registerReq py-5'>
            
            <h1>Generate Request</h1>
            <form className='requestForm container' onSubmit={handleSubmit}>
            <div className='row px-5 mt-2'>
              <div className='col-6'>
                <input
                  className='input_details w-100'
                  placeholder='Name'
                  type='text'
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className='col-6'>
                <input
                  className='input_details w-100'
                  placeholder='Email'
                  type='text'
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>

            <div className='row px-5'>
              <div className='col-12'>
                <input
                  className='input_details w-100'
                  placeholder='Address'
                  type='text'
                  value={address}
                  onChange={handleAddressChange}
                />
              </div>
            </div>

            <div className='row px-5'>
              <div className='col-4'>
                <input
                  className='input_details w-100'
                  placeholder='Food type'
                  type='text'
                  value={foodType}
                  onChange={handleFoodTypeChange}
                />
              </div>
              <div className='col-4'>
                <input
                  className='input_details w-100'
                  placeholder='Quantity (in KG)'
                  type='text'
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </div>
              <div className='col-4'>
                <input
                  className='input_details w-100'
                  placeholder='Cooked time'
                  type='text'
                  value={cookedTime}
                  onChange={handleCookedTimeChange}
                />
              </div>
            </div>

            <div className='row px-5 mt-4'>
              <div className='col-12 mx-4'>
                <input
                  className='me-2'
                  type='checkbox'
                  checked={termsAccepted}
                  onChange={handleTermsAcceptedChange}
                />
                <label className='tAndc_label' htmlFor=''>
                  I accept the terms & conditions
                </label>
              </div>

              <div className='col-12 mx-4'>
                <input className='me-2' type='checkbox' />
                <label className='tAndc_label' htmlFor=''>
                  I understand that this request could be accepted or denied
                </label>
              </div>
            </div>

            <button type='submit' className='submit'>
              Submit
            </button>
          </form>
            
            </div>

      </div>
    </div>


  )
}

export default RequestGenForm;