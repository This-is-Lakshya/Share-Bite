import './aboutComponents.css';

const InfoPageSection = ({heading, para1, para2, para3}) => {
  return (
    <div className="InfoPageSection">
        <div className="heading_section">
          <h2 className='page_heading'>{heading}</h2>
          <div className='underline_heading_page_sec'></div>
        </div>
        <p className='para'>{para1} <br /><br /> {para2} <br /><br /> {para3}</p>
    </div>
  )
}

export default InfoPageSection;