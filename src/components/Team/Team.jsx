import React, { useState } from 'react';
import './Team.css'; // Make sure to create this CSS file

export const Team = ({ members }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredMembers = members.filter(
    member => 
      member.name.toLowerCase().includes(searchTerm) || 
      member.keywords.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="team-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by last name"
          onChange={handleSearchChange}
        />
        {/* Alphabetical shortcuts could be added here if needed */}
      </div>
      
      <div className="member-grid">
        {filteredMembers.map(member => (
          <div className="member-card" key={member.id}>
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
            <p>{member.location}</p>
            <p>{member.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};