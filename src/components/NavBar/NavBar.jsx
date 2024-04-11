import {NavLink} from 'react-router-dom';
import shareBiteLogo from '../../assets/shareBiteLogo.svg';
import './navBar.css';

const NavBar = () => {
  return (
    <header className='navBar'>

      <div className='nav_logo-links'>
        <div className='logo_box'>
          <img className='logo' src={shareBiteLogo} alt="" />
        </div>

        <div className='nav_links'>
          <NavLink className={navClass => navClass.isActive ? "active_link" : ""} to={'/'}>Home</NavLink>
          <NavLink className={navClass => navClass.isActive ? "active_link" : ""} to={'/about'}>About</NavLink>
          <NavLink className={navClass => navClass.isActive ? "active_link" : ""} to={'/contact'}>Contact</NavLink>
        </div>
      </div>

      <div className='login-register_options'>
        <NavLink className='login_btn' to={'/login'}>Login</NavLink>
        <div className='register_btn'>
          <NavLink to={'/register'}>Register</NavLink>
        </div>
      </div>

    </header>
  )
}

export default NavBar;