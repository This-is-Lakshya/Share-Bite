import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './requestGenForm.css';

const RequestGenForm = () => {
  return (
    <div className='RequestGenForm'>
      <div className='outer_border_requestBox'>
        <div className='requestGenFormBox'>
            
            <h1>Generate Request</h1>
            <form className='requestForm container'>

              <div className='row px-5 my-2'>
                <div className='col-6'>
                  <input className='input_details w-100' placeholder='Name' type="text" />
                </div>
                <div className='col-6'>
                  <input className='input_details w-100' placeholder='Email' type="text" />
                </div>
              </div>

              <div className='row px-5 my-2'>
                <div className='col-12'>
                  <input className='input_details w-100' placeholder='Address' type="text" />
                </div>
              </div>

              <div className='row px-5 my-2'>
                <div className='col-4'>
                  <input className='input_details w-100' placeholder='Food type' type="text" />
                </div>
                <div className='col-4'>
                  <input className='input_details w-100' placeholder='Quantity (in KG)' type="text" />
                </div>
                <div className='col-4'>
                  <input className='input_details w-100' placeholder='Cooked time' type="text" />
                </div>
              </div>

            </form>

        </div>
      </div>
    </div>
  )
}

export default RequestGenForm;