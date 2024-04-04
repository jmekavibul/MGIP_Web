import React, { useState } from 'react';
import './Team.css';
import teamphoto from '../../pictures/AITeamphoto.jpg'

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
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="team-container">
      <div className='background' style={{ backgroundImage: `url(${teamphoto})` }}/>
      <div className="search-container">
          <div className='search-items'>
              <div className="search-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </div>

              <input
              className="the-search-bar"
              type="text"
              placeholder="Search by Name"
              value={searchQuery}
              onChange={handleSearchChange}
              />
          </div>
          

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
            <img src={member.photo} alt={member.name} />
            <div className="member-info">
              <h3>{member.name}</h3>
              <div className="additional-info">

                <p>{member.title}</p>
                <p>{member.location}</p>
                <p>{member.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};