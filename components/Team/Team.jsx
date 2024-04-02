import React from 'react';
import './Team.css'; // Make sure to create this CSS file
import joe from '../../assets/Joe-Muncy.jpg'
export const Team = ({ members }) => {
  return (
    <div className="team-container">
      <div className="search-bar">
        {/* Implement search functionality here */}
        <input type="text" placeholder="Search by last name" />
        <div className="alphabet">
          {/* Map through the alphabet for quick search links */}
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
            <a key={letter} href={`#${letter}`}>{letter}</a>
          ))}
        </div>
      </div>
      <div className="team-grid">
        {members.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.photo} alt={member.name} />
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <p>{member.location}</p>
              <p>{member.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

 
