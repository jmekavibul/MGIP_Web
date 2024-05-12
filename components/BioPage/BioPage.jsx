import React from 'react';
import './BioPage.css'; // Make sure to create a corresponding CSS file
import ContentBox2 from '../ContentBox2/ContentBox2';

const BioPage = ({ member }) => {
  return (
        <div className="bio-full-page">
      <div className="bio-image-section">
        <img src={member.photo} alt={member.name} className="bio-large-photo"/>
      </div>
        <ContentBox2 content={<div>      <div className="bio-info-section">
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
          {member.bar.length > 1 ? <div className="bio-section"> 
                <h3>Bar Admissions</h3>
                    {member.bar.map((b) =>{
                        return <p>{b}</p>
                    })}
            </div>:<></>}
          <div className="bio-section">
            <h3>Education</h3>
            {member.education.map((edu, index) => <p key={index}>{edu}</p>)}
          </div>
          <div className="bio-section">
            {member.memberships.length > 1 ? <div><h3>Memberships</h3>
            {member.memberships.map((edu, index) => <p key={index}>{edu}</p>)}</div>:<></>}
            
          </div>
          {member.activities ? <div className="bio-section"> 
                <h3>Activities</h3>
                    {member.activities.map((act) =>{
                        return <p>{act}</p>
                    })}
            </div>:<></>}
            <div className="bio-section">
            {member.experience ? <div className="bio-section"> 
                <h3>Experience</h3>
                    {member.experience.map((exp) =>{
                        return <p>{exp}</p>
                    })}
            </div>:<></>}

                {member.experienceList ? (
                    <ul>
                        {member.experienceList.map((exp) => {
                            console.log(exp);
                            return <li>{exp}</li>; // Make sure to return the <li> element
                        })}
                    </ul>
                ) : <div></div>}
            </div>

                {member.awards ? <div className="bio-section"> 
                <h3>Recent Awards and Rankings</h3> 
                <ul>
                    {member.awards.map((award) =>{
                        return <li>{award}</li>
                    })}
                </ul>
            </div>:<></>}

            {member.concentration ? <div className="bio-section"> 
                <h3>Areas of Concentration</h3> 
                <ul>
                    {member.concentration.map((con) =>{
                        return <li>{con}</li>
                    })}
                </ul>
            </div>:<></>}
                
            
        </div>

      </div></div>}/>
    </div>
  );
};

export default BioPage;
