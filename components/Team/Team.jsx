import React, { useState } from 'react';
import './Team.css';
import teamphoto from '../../pictures/aiteam.jpg';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineSearch } from "react-icons/md";
import Hero2 from '../Hero2/Hero2';

export const Team = ({ members }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState('');
  const [selectedField, setSelectedField] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedMembership, setSelectedMembership] = useState(null); // New state for membership filter

  const handleTitleChange = selectedOption => {
    setSelectedTitle(selectedOption);
  };

  const handleFieldChange = selectedOption => {
    setSelectedField(selectedOption);
  };

  const handleMembershipChange = selectedOption => {
    setSelectedMembership(selectedOption);
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

  const membershipOptions = [
    { value: 'All', label: 'Memberships' },
    { value: 'AIPLA', label: 'AIPLA' },
    { value: 'INTA', label: 'INTA' },
    { value: 'ABA', label: 'ABA' },
    { value: 'FICPI', label: 'FICPI' },
    { value: 'VPP', label: 'VPP' },
    // Add other memberships relevant to your data
  ];

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
      setActiveLetter(letter);
      setSearchQuery(letter);
    }
  };

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!selectedField || selectedField.value === 'All' || member?.experience?.join().includes(selectedField.value)) &&
    (!selectedTitle || selectedTitle.value === 'All' || member.title === selectedTitle.value) &&
    (!selectedMembership || selectedMembership.value === 'All' || member?.memberships?.includes(selectedMembership.value))
  );

  return (
    <div className="team-container">
      <Hero2
        backgroundImage={teamphoto}
        text="Our Team"
        height="50vh"
        subText=""
      />

      <div className='teamBesidesHero'>
        <div className="search-container">
          <div className='search-items'>
            <input
              className="the-search-bar"
              type="text"
              placeholder="Search by Name"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <div className='search-icon'>
              <MdOutlineSearch />
            </div>
            <div className='filterContainer'>
              <div className="filters">
                <Select
                  value={selectedField}
                  options={options}
                  onChange={handleFieldChange}
                  className="select-filter"
                  isClearable={true}
                  placeholder="Specialised field"
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
              <div className='filters'>
                <Select
                  value={selectedMembership}
                  onChange={handleMembershipChange}
                  options={membershipOptions}
                  className="select-filter"
                  isClearable={true}
                  placeholder="Filter by Membership" // New filter for memberships
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
      </div>

      <div className="team-grid">
        {filteredMembers.sort((a, b) => (a.lastName || '').localeCompare(b.lastName || '')).map((member, index) => (
          <Link to={`/${member.id}`} key={index} className="team-member">
            <img src={member.photo} alt={member.name} />
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
