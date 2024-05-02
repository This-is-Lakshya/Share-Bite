import React from 'react';
import './home.css';
import LandingPage from '../../components/HomeComponents/LandingPage';
import OurImpact from '../../components/HomeComponents/OurImpact';
import DonationCard from '../../components/HomeComponents/DonationCard';

const Home = () => {
  
  return (
    <main className='Home'>
      
      <LandingPage />

      <OurImpact />

      <DonationCard />

    </main>
  )
}

export default Home;