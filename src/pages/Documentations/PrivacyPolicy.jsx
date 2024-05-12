import { NavLink } from 'react-router-dom';
import './documentation.css';

const PrivacyPolicy = () => {
  return (
    <div className='PrivacyPolicy'>

      <div className="heading_section">
        <h2 className='page_heading'>Privacy Policy</h2>
        <div className='underline_heading_page_sec'></div>
      </div>
      <p className='para'>At ShareBite, safeguarding your privacy is paramount. We hold all financial details related to your interactions with the Foundation in the strictest confidence. Your trust is essential to us, and we do not disclose email addresses or phone numbers of our donors or constituents. <br /><br />
        <b>Our commitment to privacy extends to the following policies: </b> <br /><br />
        • We only request personal information necessary for processing donations to ShareBite. <br />
        • Your information is never shared or used for any purpose without your explicit consent. <br />
        • We do not engage in trading or selling personal data to third parties. <br />
        • Donors have the option to remain anonymous if they prefer. <br />
        • You can opt-out of receiving solicitations or specific mailings, such as newsletters, at any time. <br />
        • We do not track, collect, or distribute personal information from visitors to our website. <br />
        • Personal data collected online is encrypted using advanced technology. <br />
        • Information stored in our database is protected with strict security measures. <br /><br />
        
        <b>To ensure transparency and trust, we pledge the following: </b> <br /><br />
        • Clear communication about ShareBite mission and the use of donated resources. <br />
        • Disclosure of our governing board's identity and their responsible decision-making. <br />
        • Access to our latest financial statements. <br />
        • Recognition and acknowledgment of your contributions. <br />
        • Confidential handling of your donation information as required by law. <br />
        • Professionalism in all interactions with ShareBite representatives. <br />
        • Disclosure of whether donation seekers are volunteers, employees, or hired solicitors. <br />
        • Control over your contact preferences and mailing lists. <br />
        • Assurance of prompt, honest answers to any donation-related inquiries. <br /><br />

        <b>What we collect:</b> <br /><br />
        • Personal information for donation processing and communication purposes. <br />
        • Data from payment processors for electronic donations. <br />
        • Information shared with service providers to enhance donor experience and fundraising efforts. <br /><br />

        <b>How we use it:</b> <br /><br />
        • Issuing receipts and expressing gratitude for donations. <br />
        • Updating donors on ARPAN's activities and fundraising initiatives. <br />
        • Internal analysis, reporting, and regulatory compliance. <br />
        • Publicizing anonymous donor contributions unless otherwise specified. <br />
        • Continuous improvement of our fundraising strategies using available data. <br /><br />

        <b>Your security is paramount:</b> <br /><br />
        • We employ robust security measures to protect donor information. <br />
        • We comply with legal requirements and protect our rights, donors, and users. <br /><br />

        <b>Updates and Data Retention:</b> <br /><br />
        • We may update our policies, and any changes will be communicated accordingly. <br />
        • We retain donor-related information as necessary, adhering to legal obligations. <br /><br />

        <b>Your Rights:</b> <br /><br />
        • You have the right to access, correct, and request deletion of your information. <br />
        • We respect your privacy preferences and will act upon your requests promptly. <br /><br />

        For inquiries or to ensure the accuracy of your donor data, you can <NavLink to={'/contact'} >Contact Us</NavLink>.

      </p>

    </div>
  )
}

export default PrivacyPolicy;