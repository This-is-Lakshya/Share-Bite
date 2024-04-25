import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import que_icon from '../../assets/question.svg';
import down_arr_icon from '../../assets/down-arrow.svg';
import FAQuestions from './FAQuestion.json';
import './faqs.css';

const FAQs = () => {
  return (
    <div className="FAQs">

      <h6 className='h6_heading'>SHAREBITE COMMON FAQS</h6>
      <h1 className='main_heading'>Frequently Asked Questions</h1>

      <div className='requestGenFormBox p-2'>

          {
            FAQuestions.map((que) =>{
              
              return(
                <div className='question_faq' key={que.id}>
                  <img src={que_icon} alt="" />
                  <p className='m-0'>{que.question}</p>
                  <div className='down_arr'>
                    <img src={down_arr_icon} alt="" />
                  </div>
                </div>
              )

            })
          }
        
      </div>

    </div>
  )
}

export default FAQs;