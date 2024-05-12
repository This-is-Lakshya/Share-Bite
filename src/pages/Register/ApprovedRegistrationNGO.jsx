import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Register/register.css';

const ApprovedRegistrationNGO = () => {
  return (
    <div className='ApprovedRegistrationNGO'>

        <div className='outer_border_arngo'>
            <div className='createAccountBox'>
                <div className='w-100 heading_box'>
                    <h1>Register</h1>
                </div>

                <form>
                    <div className='row px-5 mt-2'>
                        <div className='col-12'>
                            <input
                            className='input_details w-100'
                            placeholder='Email'
                            type='text'
                            />
                        </div>
                    </div>

                    <div className='row px-5'>
                        <div className='col-12'>
                            <input
                            className='input_details w-100'
                            placeholder='Password'
                            type='text'
                            />
                        </div>
                    </div>

                    <div className='row px-5'>
                        <div className='col-12'>
                            <input
                            className='input_details w-100'
                            placeholder='Confirm Password'
                            type='text'
                            />
                        </div>
                    </div>

                    <button type='submit' className='submit'>
                        Create Account
                    </button>
                </form>
                
            </div>
        </div>

    </div>
  )
}

export default ApprovedRegistrationNGO