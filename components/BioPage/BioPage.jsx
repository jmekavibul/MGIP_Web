import React from 'react';
import './BioPage.css'; // Make sure to create a corresponding CSS file

const BioPage = ({ member }) => {
  return (
        <div className="bio-full-page">
      <div className="bio-image-section">
        <img src={member.photo} alt={member.name} className="bio-large-photo"/>
      </div>
      <div className="bio-info-section">
        <div className="bio-header">
          <h1>{member.name}</h1>
          <h2>{member.title}</h2>
          <div className="bio-contact">
            <p><strong>Location:</strong> {member.location}</p>
            <p><strong>Phone:</strong> {member.phone}</p>
            <p><strong>Email:</strong> {member.email}</p>
          </div>
          <div className="bio-social-links">
            {/* Social links can be added here if available */}
          </div>
        </div>
        <div className="bio-details">
          <div className="bio-section">
            <h3>Bars</h3>
            {member.bar.map((edu, index) => <p key={index}>{edu}</p>)}
          </div>
          <div className="bio-section">
            <h3>Education</h3>
            {member.education.map((edu, index) => <p key={index}>{edu}</p>)}
          </div>
            <div className="bio-section">
                <h3>Experience</h3>
                <p>{member.experience[0]}</p>
                {member.experience.length > 1 ? <p>{member.experience[1]}</p> : <div></div>}

                {member.experienceList ? (
                    <ul>
                        {member.experienceList.map((exp) => {
                            console.log(exp);
                            return <li>{exp}</li>; // Make sure to return the <li> element
                        })}
                    </ul>
                ) : <div></div>}
            </div>
        </div>
      </div>
    </div>
  );
};

export default BioPage;
