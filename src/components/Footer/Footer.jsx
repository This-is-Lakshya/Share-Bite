import { NavLink } from 'react-router-dom';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import linkedin from '../../assets/linkedin.png';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_content">

            <div className='footer_sections'>

              <div className="platform">

                <div className='footer_heading'>
                  <h3>Platform</h3>
                  <div className="heading_underline"></div>
                </div>

                <div className="footer_links">
                  <NavLink to={'/about'} >About Us</NavLink>
                  <NavLink to={'/privacyPolicy'} >Privacy Policy</NavLink>
                </div>
              </div>

              <div className="quick_links">

                <div className='footer_heading'>
                  <h3>Quick Links</h3>
                  <div className="heading_underline"></div>
                </div>

                <div className="footer_links">
                  <NavLink to={'/'} >Home</NavLink>
                  <NavLink to={'/login'} >Login</NavLink>
                  <NavLink to={'/registerAsNGO'} >Register (NGOs)</NavLink>
                </div>  

              </div>
              
              <div className="get_help">

              <div className='footer_heading'>
                <h3>Get Help</h3>
                <div className="heading_underline"></div>
              </div>
              
                <div className="footer_links">
                  <NavLink to={'/FAQs'} >FAQs</NavLink>
                  <NavLink to={'/contact'} >Contact Us</NavLink>
                </div>
              </div> 
            </div>

            <div className='social_links'>

              <div className='footer_heading'>
                <h3>Follow Us</h3>
                <div className="heading_underline"></div>
              </div>
            
              <div className="icons">
                <img className="social_icon" src={facebook} alt="" />
                <img className="social_icon" src={twitter} alt="" />
                <img className="social_icon" src={youtube} alt="" />
                <img className="social_icon" src={linkedin} alt="" /> 
              </div>

            </div>

        </div>
        <div className='footer_underline'></div>
        <h5>©Copyright. All rights reserved</h5>
    </div>
  )
}

export default Footer;