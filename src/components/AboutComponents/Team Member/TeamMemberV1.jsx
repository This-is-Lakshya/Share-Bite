import '../aboutComponents.css';

const TeamMemberV1 = ({name, role, profile}) => {
  return (
    <div className='TeamMemberV1'>
        <div className='team_profile_area'>
            <div className='team_profile_img_frame'>
                <div className='team_profile_img'>
                  <img src={profile} alt="" />
                </div>
            </div>
            <div className='team_profile_details'>
                <h4 className='team_profile_name'>{name}</h4>
                <p className='team_profile_role'>{role}</p>
            </div>
        </div>
    </div>
  )
}

export default TeamMemberV1