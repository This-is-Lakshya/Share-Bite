import { useNavigate } from 'react-router-dom';
import coverImg from '../../assets/landing_page_coverimg.jpg';
import bullet1 from '../../assets/blower.png';
import bullet2 from '../../assets/chat.png';
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
            <p>Our platform connects surplus food donors with NGOs, ensuring efficient distribution to those in need. We streamline the process, empowering individuals to combat food insecurity effectively.</p>
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
              <h4>Dashboard</h4>
            </div>

            <p>Empowering NGOs with our dashboard, enabling seamless access to donation requests from individuals across listed cities.</p>
          </div>
          {/* -------- Feature-Card ENDs ------- */}

          {/* ---------- Feature-Card --------- */}
          <div className='features_card'>
            <div className='feature_heading'>
              <img src={bullet2} alt="" />
              <h4>Communication</h4>
            </div>

            <p>Instant notifications empower donors and NGOs to connect seamlessly, facilitating impactful two-way communication.</p>
          </div>
          {/* -------- Feature-Card ENDs ------- */}

          {/* ---------- Feature-Card --------- */}
          <div className='features_card'>
            <div className='feature_heading'>
              <img src={bullet3} alt="" />
              <h4>Transportation</h4>
            </div>

            <p>Donate food effortlessly through our platform. NGOs handle pickup directly from your doorstep, eliminating transportation worries.</p>
          </div>
          {/* -------- Feature-Card ENDs ------- */}

        </div>
      </div>

    </main>
  )
}

export default LandingPage;