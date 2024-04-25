import React, { useState } from 'react';
import './Team.css';
import teamphoto from '../../pictures/aiteam.jpg'
import Select from 'react-select'

export const Team = ({ members }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState('');
  const [selectedField, setSelectedField] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const handleTitleChange = selectedOption => {
    setSelectedTitle(selectedOption);
  };
  const titleOptions = [
    { value: 'All', label: 'Titles' },
    { value: 'PRINCIPAL SHAREHOLDER', label: 'PRINCIPAL SHAREHOLDER' },
    { value: 'PRINCIPAL', label: 'PRINCIPAL' },
    { value: 'OF COUNSEL', label: 'OF COUNSEL'},
    { value: 'ASSOCIATE', label: 'ASSOCIATE'},
    { value: 'PATENT AGENT', label: 'PATENT AGENT'},
    { value: 'TECHNICAL ADVISOR', label: 'TECHNICAL ADVISOR'},
    { value: 'INTELLECTUAL PROPERTY ADVISOR', label: 'INTELLECTUAL PROPERTY ADVISOR'},
    { value: 'CONTROLLER', label: 'CONTROLLER'},
    { value: 'OFFICE MANAGER', label: 'OFFICE MANAGER'}
    // ... add more titles as needed
  ];
  const options = [
    { value: 'All', label: 'Specialised field' },
    { value: 'Electrical Engineering', label: 'Electrical Engineering' },
    { value: 'Industrial Engineering', label: 'Industrial Engineering' },
    { value: 'Telecommunications', label: 'Telecommunications' },
    { value: 'Mechanical Engineering', label: 'Mechanical Engineering' },
    { value: 'Cybersecurity', label: 'Cybersecurity'},
    { value: 'Chemical', label: 'Chemical'},
    { value: 'Electro-Mechanical', label: 'Electro-Mechanical'},
    { value: 'Copyright', label: 'Copyright'},
    { value: 'Trademark', label: 'Trademark'},
    { value: 'Bio', label: 'Bio'},


  ];

  const handleFieldChange = selectedOption => {
    setSelectedField(selectedOption);
  };

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

    const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!selectedField || selectedField.value === 'All' || member.education.includes(selectedField.value))
    &&
        (!selectedTitle || selectedTitle.value === 'All' || member.title === selectedTitle.value)
    );

  return (
    <div className="team-container">
        
        <div className='team-background' style={{ backgroundImage: `url(${teamphoto})` }} />
        <h1 style={{color: 'white'}}>Our Team</h1>

      <div className="search-container">
          <div className='search-items'>
              <input
                className="the-search-bar"
                type="text"
                placeholder="Search by Name"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <div className="search-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </div>
            <div className='filterContainer'>
                <div className="filters">
                        <Select
                            value={selectedField} // The value is now controlled by state
                            options={options}
                            onChange={handleFieldChange}
                            className="select-filter"
                            isClearable={true}
                            placeholder="Specialised field" // Placeholder is now purely visual
                            isSearchable={false}
                        />
                </div>
                <div className='filters'>
                    <Select
                        value={selectedTitle}
                        onChange={handleTitleChange}
                        options={titleOptions}
                        className="select-filter"
                        isClearable={true}
                        placeholder="Filter by Title"
                        isSearchable={false}
                    />
                </div>
            </div>

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
                <p>{member.email}</p>
                <p>{member.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};