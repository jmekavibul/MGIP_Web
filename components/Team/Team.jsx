import React, { useState } from 'react';
import './Team.css';
import joe from '../../pictures/Joe-Muncy.jpg';

export const Team = ({ members }) => {
    const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState('');

  const handleSearchChange = (e) => {
    // Clear active letter when typing in search
    setActiveLetter('');
    setSearchQuery(e.target.value);
  };

  const handleLetterClick = (letter) => {
    // Set active letter and update search query to match the clicked letter
    if (activeLetter === letter) {
        setActiveLetter('');
        setSearchQuery('');
      } else {
        // Otherwise, set active letter and update search query to match the clicked letter
        setActiveLetter(letter);
        setSearchQuery(letter);
      }
  };

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="team-container">
    <div className="search-container">
        <input
        className="the-search-bar"
        type="text"
        placeholder="Search by first name"
        value={searchQuery}
        onChange={handleSearchChange}
        />
        <div className="alphabet">
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
            <a
            key={letter}
            href={`#${letter}`}
            className={activeLetter === letter ? 'active' : ''}
            onClick={(e) => {
                e.preventDefault();
                handleLetterClick(letter);
            }}
            >
            {letter}
            </a>
        ))}
        </div>
    </div>
      <div className="team-grid">
        {filteredMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.photo} alt={member.name} /> {/* Ensure correct image path */}
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