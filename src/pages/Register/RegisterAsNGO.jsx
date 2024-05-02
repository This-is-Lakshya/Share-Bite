import { getDatabase, ref, push } from 'firebase/database';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';

// Initialize Email.js with your user ID
emailjs.init('2-E011kpHafscnFGM');

const RegisterAsNGO = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const address = formData.get('address');
    const contactNumber = formData.get('contactNumber');
    const website = formData.get('website');

    if (!name || !email || !address || !contactNumber || !website) {
      alert('Please fill out all required fields');
      return;
    }

    const linkedIn = formData.get('linkedIn') || '';
    const twitter = formData.get('twitter') || '';
    const facebook = formData.get('facebook') || '';
    const youtube = formData.get('youtube') || '';
    const instagram = formData.get('instagram') || '';
    const additionalContactNumber = formData.get('additionalContactNumber') || '';
    const proof = formData.get('proof') || '';

    const termsAccepted = formData.get('termsAccepted');
    const understandAccepted = formData.get('understandAccepted');

    if (!termsAccepted || !understandAccepted) {
      alert('Please check both terms & conditions checkboxes');
      return;
    }

    const db = getDatabase();
    const ngoRef = ref(db, 'ngos');
    const newNGO = {
      name,
      email,
      address,
      website,
      linkedIn,
      twitter,
      facebook,
      youtube,
      instagram,
      contactNumber,
      additionalContactNumber,
      proof,
    };
    push(ngoRef, newNGO)
      .then(() => {

        // Send email notification
        emailjs.send('service_j1dp93q', 'template_y5kvypc', {
          to_email: email,
          from_name: 'ShareBite',
          message: 'Thank you for registering as an NGO! Our team will contact you and verify your Information shortly.',
        })
        .then((response) => {
          console.log('Email sent:', response);
        })
        .catch((error) => {
          console.error('Email error:', error);
        });

        // sweetalert success
        Swal.fire({
          title: "Submited!",
          text: "You response is submitted",
          icon: "success"
        });

        form.reset();
      })
      .catch((error) => {
        console.error('Error storing NGO data:', error);

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
    <div className='RegisterAsNGO'>
      <div className='outer_border_registerNGO'>
        <div className='inner_box_registerNGO py-5'>
          <h1>Register</h1>
          <form className='container regNGOform' onSubmit={handleSubmit}>
            <div className="row px-5 mt-2">
              <div className="col-6">
                <label className='label_regNGO'>Name (Organization)*</label>
                <input className='input_details w-100' type="text" name="name" />
              </div>
              <div className="col-6">
                <label className='label_regNGO'>Email (Organization)*</label>
                <input className='input_details w-100' type="text" name="email" />
              </div>
            </div>
            <div className="row px-5 mt-2">
              <div className="col-12">
                <label className='label_regNGO'>Address (Main Office)*</label>
                <input className='input_details w-100' type="text" name="address" />
              </div>
            </div>
            <div className="row px-5 mt-2">
              <div className="col-6">
                <label className='label_regNGO'>Website link*</label>
                <input className='input_details w-100' type="text" name="website" />
              </div>
              <div className="col-6">
                <label className='label_regNGO'>LinkedIn link</label>
                <input className='input_details w-100' type="text" name="linkedIn" />
              </div>
            </div>
            <div className="row px-5 mt-2">
              <div className="col-6">
                <label className='label_regNGO'>Twitter link</label>
                <input className='input_details w-100' type="text" name="twitter" />
              </div>
              <div className="col-6">
                <label className='label_regNGO'>Facebook link</label>
                <input className='input_details w-100' type="text" name="facebook" />
              </div>
            </div>
            <div className="row px-5 mt-2">
              <div className="col-6">
                <label className='label_regNGO'>YouTube link</label>
                <input className='input_details w-100' type="text" name="youtube" />
              </div>
              <div className="col-6">
                <label className='label_regNGO'>Instagram link</label>
                <input className='input_details w-100' type="text" name="instagram" />
              </div>
            </div>
            <div className="row px-5 mt-2">
              <div className="col-6">
                <label className='label_regNGO'>Contact Number*</label>
                <input className='input_details w-100' type="text" name="contactNumber" />
              </div>
              <div className="col-6">
                <label className='label_regNGO'>Additional Contact Number</label>
                <input className='input_details w-100' type="text" name="additionalContactNumber" />
              </div>
            </div>
            <div className="row px-5 mt-2">
              <div className="col-12">
                <label className='label_regNGO'>Registered Organization Proof</label>
                <input className='input_details w-100' type="text" name="proof" />
              </div>
            </div>
            <div className='row px-5 mt-4'>
              <div className='col-12 mx-4'>
                <input className='me-2' type="checkbox" name="termsAccepted" />
                <label className='tAndc_label' htmlFor="">I accept the terms & conditions</label>
              </div>
              <div className='col-12 mx-4'>
                <input className='me-2' type="checkbox" name="understandAccepted" />
                <label className='tAndc_label' htmlFor="">I understand that this request could be accepted or denied</label>
              </div>
            </div>
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterAsNGO;
