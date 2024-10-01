import React, { useState } from 'react';
import './Team.css';
import teamphoto from '../../pictures/aiteam.jpg';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { MdOutlineSearch } from "react-icons/md";
import Hero2 from '../Hero2/Hero2';

export const Team = ({ members }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeLetter, setActiveLetter] = useState('');
    const [selectedField, setSelectedField] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState(null);
    const [selectedMembership, setSelectedMembership] = useState(null);

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
        { value: 'All', label: 'Fields' },
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

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderRadius: '10px',
            height: '60px',
            fontFamily: 'Source Sans 3, sans-serif',
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '30.28px',
            textAlign: 'left',
        }),
        singleValue: (provided) => ({
            ...provided,
            fontFamily: 'Source Sans 3, sans-serif',
            fontSize: '20px',
            fontWeight: '400',
            textAlign: 'left',
        }),
        placeholder: (provided) => ({
            ...provided,
            fontFamily: 'Source Sans 3, sans-serif',
            fontSize: '20px',
            fontWeight: '400',
            textAlign: 'left',
        }),
        indicator: (provided) => ({
            ...provided,
            padding: '10px',
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 10,
            marginTop: '5px',
            borderRadius: '8px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
            overflow: 'hidden',
            position: 'absolute',
            width: '300px',
            right: 0,
        }),
        option: (provided) => ({
            ...provided,
            fontFamily: 'Source Sans 3, sans-serif',
            fontSize: '20px',
            fontWeight: '400',
            padding: '10px 20px',
        }),
    };

    const handleSearchChange = (e) => {
        setActiveLetter('');
        setSearchQuery(e.target.value);
    };

    const handleLetterClick = (letter) => {
        if (activeLetter === letter) {
            setActiveLetter('');
            setSearchQuery('');
        } else {
            setActiveLetter(letter);
            setSearchQuery(letter);
        }
    };
    const getInitials = (member) => {
        const initials = [member.firstName, member.middleName, member.lastName]
            .filter(Boolean)
            .map(name => name.charAt(0).toUpperCase())
            .join('');
        return initials;
    };
    const filteredMembers = members.filter(member => {
        const initials = getInitials(member);
        const matchesInitials = initials.includes(activeLetter);
        const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesInitials &&
            matchesSearch &&
            (!selectedField || selectedField.value === 'All' || member?.experience?.join().includes(selectedField.value)) &&
            (!selectedTitle || selectedTitle.value === 'All' || member.title === selectedTitle.value) &&
            (!selectedMembership || selectedMembership.value === 'All' || member?.memberships?.includes(selectedMembership.value));
    });

    return (
        <div className="team-container">
            <Hero2
                backgroundImage={teamphoto}
                text="Our Team"
                height="40vh"
                subText=""
            />

            <div className='teamBesidesHero'>
                <div className="search-container">
                    <div className='search-input'>
                        <div className='search-bar-container'>
                            <input
                                className="search-bar"
                                type="text"
                                placeholder="Search by Name"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <MdOutlineSearch className='search-icon' />
                        </div>
                    </div>
                    <div className="filters-container">
                        <Select
                            value={selectedMembership}
                            onChange={handleMembershipChange}
                            options={membershipOptions}
                            styles={customStyles}
                            isClearable={true}
                            placeholder="By Membership"
                            isSearchable={false}
                        />
                        <Select
                            value={selectedField}
                            options={options}
                            onChange={handleFieldChange}
                            styles={customStyles}
                            isClearable={true}
                            placeholder="By Field"
                            isSearchable={false}
                        />
                        <Select
                            value={selectedTitle}
                            onChange={handleTitleChange}
                            options={titleOptions}
                            styles={customStyles}
                            isClearable={true}
                            placeholder="By Title"
                            isSearchable={false}
                        />
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
                {filteredMembers
                    .sort((a, b) => {
                        // Check if either member has the title "Mascot" and sort them last
                        if (a.name === "Mascot" && b.name !== "Mascot") {
                            return 1; // "Mascot" goes after any other title
                        }
                        if (b.name === "Mascot" && a.name !== "Mascot") {
                            return -1; // "Mascot" goes after any other title
                        }

                        // Sort by last name first, then first name
                        const lastNameComparison = (a.lastName || '').localeCompare(b.lastName || '');
                        if (lastNameComparison !== 0) {
                            return lastNameComparison;
                        }
                        return (a.firstName || '').localeCompare(b.firstName || '');
                    })
                    .map((member, index) => (
                        <Link to={`/${member.id}`} key={index} className="team-member">
                            <img src={member.photo} alt={member.name} />
                            <div className={`member-info ${member.name.length > 18 ? 'long-name' : ''}`}>
                                <h3>{member.name}</h3>
                                <p>{member.title}</p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Team;
