import { useNavigate } from 'react-router-dom';
import coverImg from '../../assets/landing_page_coverimg.jpg';
import bullet1 from '../../assets/blower.png';
import bullet2 from '../../assets/eco-mode.png';
import bullet3 from '../../assets/vehicle.png';
import './homeComponent.css';

const LandingPage = () => {

  const navigateTo = useNavigate();

  return (
    <main className='LandingPage'>

      <div className='LandingPage_ContentAre'>

        {/* ---------------- Landing Page Main-front -------------- */}
        <div className='top_content'>

          <div className='leftSide_content'>
            <h1>Share-Some-Grains</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quibusdam sed itaque nemo quod, molestias, quo repudiandae blanditiis neque, exercitationem dicta quos fugiat est rem sit?</p>
            <button onClick={()=>{navigateTo('/requestGeneration')}} className='foodDonate_btn'>Donate</button>
          </div>

          <div className='rightSide_img'>
            <img src={coverImg} alt="" />
          </div>

        </div>
        {/* ------------- Landing Page Main-front ENDs ------------ */}

        <div className='bottom_content'>

          {/* ---------- Feature-Card --------- */}
          <div className='features_card'>
            <div className='feature_heading'>
              <img src={bullet1} alt="" />
              <h4>Feature One</h4>
            </div>

            <p>It Lorem ipsum, dolor sit amet sit amet sit amet consectetur adipisicing elit. Alias officiis quasi corporis dignissimos sapiente minus in aperiam aut! Quae, eveniet.</p>
          </div>
          {/* -------- Feature-Card ENDs ------- */}

          {/* ---------- Feature-Card --------- */}
          <div className='features_card'>
            <div className='feature_heading'>
              <img src={bullet2} alt="" />
              <h4>Feature Two</h4>
            </div>

            <p>It Lorem ipsum, dolor sit amet sit amet sit amet consectetur adipisicing elit. Alias officiis quasi corporis dignissimos sapiente minus in aperiam aut! Quae, eveniet.</p>
          </div>
          {/* -------- Feature-Card ENDs ------- */}

          {/* ---------- Feature-Card --------- */}
          <div className='features_card'>
            <div className='feature_heading'>
              <img src={bullet3} alt="" />
              <h4>Feature Three</h4>
            </div>

            <p>It Lorem ipsum, dolor sit amet sit amet sit amet consectetur adipisicing elit. Alias officiis quasi corporis dignissimos sapiente minus in aperiam aut! Quae, eveniet.</p>
          </div>
          {/* -------- Feature-Card ENDs ------- */}

        </div>
      </div>

    </main>
  )
}

export default LandingPage;