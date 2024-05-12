import TeamMemberV1 from './Team Member/TeamMemberV1';
import lakshya_pic from '../../assets/lakshya_pic.jpg';
import sumit_pic from '../../assets/sumit_pic.jpg';
import satyarth_pic from '../../assets/satyarth_pic.jpg';
import rajat_pic from '../../assets/rajat.jpg';
import './aboutComponents.css';

const TeamInfoSection = () => {
  return (
    <div className='TeamInfoSection'>
      <div className="heading_section">
        <h2 className='page_heading'>Meet the Team</h2>
        <div className='underline_heading_page_sec'></div>
      </div>

      <div className='team_members_info'>
        <TeamMemberV1 name="Satyarth Gupta" profile={satyarth_pic} role="Co-Founder | Backend Developer" />
        <TeamMemberV1 name="Lakshya Singh" profile={lakshya_pic} role="Founder | Full-Stack Developer" />
        <TeamMemberV1 name="Sumit Kumar Singh" profile={sumit_pic} role="Co-Founder | UI/UX Designer" />
        <TeamMemberV1 name="Rajat Gogia" profile={rajat_pic} role="Co-Founder | Content Writer" />
      </div>

    </div>
  )
}

export default TeamInfoSection;