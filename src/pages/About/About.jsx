import InfoPageSection from '../../components/AboutComponents/InfoPageSection';
import TeamInfoSection from '../../components/AboutComponents/TeamInfoSection';
import './about.css';

const About = () => {
  return (
    <div className='About'>
      <InfoPageSection heading={'About Us'} para1={'Welcome to ShareBite — a pioneering platform dedicated to addressing the critical challenge of food wastage during celebratory events. Our mission is to revolutionize surplus food management through an advanced web-based solution, seamlessly connecting individuals with surplus food to non-governmental organizations (NGOs) aiding the less fortunate.'}
        para2={'In todays tech-driven world, ShareBite ensures accessibility with a user-friendly interface designed for effortless navigation on various devices. Beyond simplifying surplus food donation, we are committed to repurposing excess celebration into a catalyst for positive societal change.'}
        para3={'Join us in reshaping the narrative around food wastage. ShareBite is more than just a platform; it is a commitment to fostering a more responsible and caring world. Together, let us transform surplus celebrations into opportunities for positive societal impact. Embrace the ShareBite journey and be a part of the change.'}
      />

      <div className="quick_links_about">
        <div className="quick_link_heading">
          <h2>Quick Links</h2>
          <div className="underline_quicklinks"></div>
        </div>
        <div className="links_about">
          <h4>Our Objective</h4>
          <h4>Our Story</h4>
          <h4>Meet the Team</h4>
        </div>
      </div>

      <InfoPageSection heading={'Our Objective'} para1={'Our primary objective is to develop a sophisticated online tool, ensuring accessibility for all individuals to seamlessly contribute surplus celebration food to nearby NGOs. The strategic focus lies in establishing direct communication channels between donors and NGOs, eliminating unnecessary intermediaries for the efficient and timely redirection of surplus food through established channels.'}
        para2={'With a core emphasis on preventing unnecessary food waste, the fundamental concept of ShareBite guides the channelling of perfectly good leftover food directly to those grappling with food insufficiency. The user-friendly web platform serves as a bridge, connecting donors with local NGOs dedicated to supporting communities facing food insecurity. The ultimate aim is to establish an efficient channel for food donation, optimizing benefits for those in critical need.'} 
        para3={'Our platform ensures direct and efficient communication, reducing logistical challenges in food donation. It enhances responsiveness to evolving NGO and individual needs, streamlining post-celebration donation and distribution. Through targeted advocacy, ShareBite aims to be a leader in efficient food donation facilitation.'} 
      />

      <InfoPageSection heading={'Our Story'} para1={'ShareBite emerges from a conscientious consideration of substantial food wastage at social gatherings, prompting a fundamental inquiry: How can surplus be channeled to benefit those in need?” Fueled by this vision, ShareBite embarked on a mission, meticulously crafting a sophisticated, web-based solution that seamlessly bridges individual generosity with NGO outreach.'}
        para2={'Our narrative is characterized by unwavering passion, relentless innovation, and an unwavering commitment to fostering positive change in our communities. Each ShareBite chapter not only surmounts challenges and celebrates successes but also reflects the collective determination of our team and the diverse partners who have become integral contributors to this impactful journey.'} 
        para3={'Join our story — a testament to shared vision and collaborative effort. From its inception to ongoing innovation, ShareBite strives to exert a lasting influence on the critical issue of food wastage. Be part of our shared determination, contribute to reshaping the narrative, and play a role in making a meaningful difference in the communities we serve.'} 
      />

      <TeamInfoSection />
    </div>
  )
}

export default About;