import { useState } from 'react'
import {About} from './components/About/About'
import {Team} from './components/Team/Team'
import {NavBar} from './components/NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import './App.css'
import joe from './pictures/Joe-Muncy.jpg';
import mark from './pictures/Mark.jpg';
import martin from './pictures/Martin.jpg';
import scott from './pictures/scott.jpg';
import john from './pictures/John.jpg';
import daniel from './pictures/daniel.jpg';
import scott_m from './pictures/Scott-Tulino.jpg';
import aaron from './pictures/Aaron-Sanders.jpg';
import jay from './pictures/Jay.jpg';
import jeffrey from './pictures/Jeff_340x464.jpg';
import roberta from './pictures/Robin_340x464.jpg';
import allison from './pictures/Allison-Tulino.jpg';
import leo from './pictures/Leo_340x464.jpg';
import mary from './pictures/MG-IP_MaryFran_340x464.jpg';
import rebeccah from './pictures/MG-IP_RGan_340x464.jpg';
import floyd from './pictures/Floyd-Canfield.jpg';
import david from './pictures/MG-IP_DavidStar_340x464.jpg';
import robert from './pictures/Robert-Gnuse.jpg';
import rui from './pictures/rui.jpg';
import hyung from './pictures/Hyung_340x464.jpg';
import marcus from './pictures/Marcus_Luepke_340x464.jpg';
import jayK from './pictures/JayKlinck_339x461.jpg';
import robertP from './pictures/MG-IP_BobPolit_340x464.jpg';
import jeffreyS from './pictures/JeffS_340x464.jpg';
import simone from './pictures/Simone2_340x464.jpg';
import roman from './pictures/RomanC_340x464.jpg';
import tony from './pictures/Tony_C_340x464.jpg';
import tetsu from './pictures/Tetsu-Yoshida.jpg';
import tingting from './pictures/Tingting_Liu_340x464.jpg';
import terry from './pictures/Terry_340x464.jpg';
import shay from './pictures/Shay-Canfield.jpg';
import kentary from './pictures/Kentaro-Higuchi.jpg';
import akiyo from './pictures/Akiyo-Yoshida.jpg';
import susan from './pictures/Susan_340x464.jpg';
import sherri from './pictures/Sherri_340x464.jpg';
import christopher from './pictures/ChrisE_340x464.jpg';
import soon from './pictures/SooC_340x464.jpg';
import sally from './pictures/Sally_Mueller_340x464.jpg';

function App() {
    const teamMembers = [
        {
          id: 1,
          name: 'Joe M. (Ken) Muncy',
          email: 'km@mg-ip.com',
          title: 'PRINCIPAL SHAREHOLDER',
          phone: '(703)621-7140',
          photo: joe, // Replace with the path to the photo
          education: 'Industrial Engineering, Electrical Engineering, Mechanical Engineering',
          memberships:'AIPPI, FICPI, ASIPI, INTA'
        },
        {
            id: 2,
            name: 'Martin R. Geissler',
            title: 'PRINCIPAL SHAREHOLDER',
            phone: '(703)621-7140',
            email: 'mrg@mg-ip.com',
            photo: martin, // Replace with the path to the photo
            education: 'Electrical Engineering technology',
            memberships: ' American Bar Association, American Intellectual Property Law Association, VPP'
          },
          {
            id: 3,
            name: 'Mark E. Olds',
            title: 'PRINCIPAL SHAREHOLDER',
            email: 'meo@mg-ip.com',
            phone: '(703)621-7140',
            photo: mark, // Replace with the path to the photo
            education: 'Telecommunications',
            memberships: 'American Bar Association, American Intellectual Property Law Association, and Virgina State Bar Intellectual Property Law Section.'

          },
          {
            id: 4,
            name: 'Scott L. Lowe',
            title: 'PRINCIPAL SHAREHOLDER',
            email: 'sll@mg-ip.com',
            phone: '(703)621-7140',
            photo: scott, // Replace with the path to the photo
            education: 'Mechanical, Electrical Engineering, Electro-Mechanical, design patent prosecution',
            memberships: ''
          },
          {
            id: 5,
            name: 'John L. Ciccozzi',
            title: 'PRINCIPAL SHAREHOLDER',
            email: 'jlc@mg-ip.com',
            phone: '(703)621-7140',
            photo: john, // Replace with the path to the photo
            education: 'Electrical Engineering'
          },
          {
            id: 6,
            name: 'Daniel Podhajny',
            title: 'PRINCIPAL SHAREHOLDER',
            email: 'dp@mg-ip.com',
            phone: '(703)621-7140',
            photo: daniel, // Replace with the path to the photo
            education: 'Computer Engineering, EV, Cybersecurity, Telecommunications'
          },          
          {
            id: 7,
            name: 'Scott M. Tulino',
            title: 'PRINCIPAL SHAREHOLDER',
            email: 'smt@mg-ip.com',
            phone: '(703)621-7140',
            photo: scott_m, // Replace with the path to the photo
            education: 'Mechanical, Chemical, Electro-Mechanical',
            memberships: ''
          },
          {
            id: 8,
            name: 'Aaron J. Sanders',
            title: 'PRINCIPAL SHAREHOLDER',
            email: 'ajs@mg-ip.com',
            phone: '(703)621-7140',
            photo: aaron, // Replace with the path to the photo
            education: 'Computer Science, Telecommunications ',
            memberships: ''
          },
          {
            id: 9,
            name: 'Jay Hines',
            title: 'PRINCIPAL',
            email: 'jh@mg-ip.com',
            phone: '(703)621-7140',
            photo: jay, // Replace with the path to the photo
            education: 'Copyright, Trademark',
            memberships: 'Member – International Trademark Association (INTA)'
          },
          {
            id: 10,
            name: 'Jeffrey H. Kaufman',
            title: 'PRINCIPAL',
            email: 'jhk@mg-ip.com',
            phone: '(703)621-7140',
            photo: jeffrey, // Replace with the path to the photo
            education: 'Copyright, Trademark',
            memberships: 'American Intellectual Property Law Association (AIPLA), International Trademark Association (INTA)'
          },
          {
            id: 10,
            name: 'Roberta S. Bren',
            title: 'PRINCIPAL',
            email: 'rsb@mg-ip.com',
            phone: '(703)621-7140',
            photo: roberta, // Replace with the path to the photo
            education: 'IP, Trademark',
            memberships: 'American Bar Association (ABA), International Trademark Association (INTA)'
          },
          {
            id: 11,
            name: 'Allison M. Tulino',
            title: 'PRINCIPAL',
            email: 'amt@mg-ip.com',
            phone: '(703)621-7140',
            photo: allison, // Replace with the path to the photo
            education: 'Industrial Engineering, Mechanical, Electrical, Automotive',
            memberships: ''
          },
          {
            id: 12,
            name: 'Leo V. Gureff',
            title: 'PRINCIPAL',
            email: 'lvg@mg-ip.com',
            phone: '(703)621-7140',
            photo: leo, // Replace with the path to the photo
            education: 'Trademarks, Copyrights, Patents,  Trade Secrets, IP',
            memberships: 'AIPPI, International Association for the Protection of Intellectual Property, American Intellectual Property Law Association (AIPLA)'
          },
          {
            id: 13,
            name: 'Mary Frances Love',
            title: 'PRINCIPAL',
            email: 'maryfran@mg-ip.com',
            phone: '(703)621-7140',
            photo: mary, // Replace with the path to the photo
            education: 'Trademarks, Copyrights, Patents,  Trade Secrets, IP',
            memberships: ''
          },
          {
            id: 14,
            name: 'Rebeccah Gan',
            title: 'PRINCIPAL',
            email: 'rgan@mg-ip.com',
            phone: '(703)621-7140',
            photo: mary, // Replace with the path to the photo
            education: 'Trademarks',
            memberships: 'INTA, ABA-IPL, APPI-US, FICPI'
          },
          {
            id: 15,
            name: 'Floyd E. Canfield',
            title: 'PRINCIPAL',
            email: 'fec@mg-ip.com',
            phone: '(703)621-7140',
            photo: floyd, // Replace with the path to the photo
            education: 'Biotechnology, Biological Sciences',
            memberships: ''
          },
          {
            id: 16,
            name: 'H. David Starr',
            title: 'PRINCIPAL',
            email: 'hds@mg-ip.com',
            phone: '(703)621-7140',
            photo: david, // Replace with the path to the photo
            education: 'Trademark',
            memberships: 'International Trademark Association (INTA)'
          },
          {
            id: 17,
            name: 'Robert F. Gnuse',
            title: 'OF COUNSEL',
            email: 'rfg@mg-ip.com',
            phone: '(703)621-7140',
            photo: robert, // Replace with the path to the photo
            education: 'Electrical, Electro-Mechanical, Mechanical ',
            memberships: ''
          },
          {
            id: 18,
            name: 'Rui W. Geissler',
            title: 'OF COUNSEL',
            email: 'rwg@mg-ip.com',
            phone: '(703)621-7140',
            photo: rui, // Replace with the path to the photo
            education: 'Electrical, Electro-Mechanical, Mechanical ',
            memberships: 'Member of INTA Committee , Teaching US Legal Writing, Research and Analysis as Adjunct Professor at Georgetown University Law Center since 2022'
          },
          {
            id: 19,
            name: 'Hyung N. Sohn',
            title: 'OF COUNSEL',
            email: 'hns@mg-ip.com',
            phone: '(703)621-7140',
            photo: hyung, // Replace with the path to the photo
            education: 'Electrical Engineering, Computer Science, Telecommunications, ',
            memberships: ''
          },
          {
            id: 20,
            name: 'Marcus H. Luepke',
            title: 'OF COUNSEL',
            email: 'mhl@mg-ip.com',
            phone: '(703)621-7140',
            photo: marcus, // Replace with the path to the photo
            education: 'Trademark',
            memberships: 'GRUR, ECTA, INTA, MARQUES'
          },
          {
            id: 21,
            name: 'Jay Klinck',
            title: 'OF COUNSEL',
            email: 'kjk@mg-ip.com',
            phone: '(703)621-7140',
            photo: jayK, // Replace with the path to the photo
            education: 'Electrical Engineering, Machanical Engineering, ',
            memberships: 'GRUR, ECTA, INTA, MARQUES'
          },
          {
            id: 22,
            name: 'Robert “Bob” Polit',
            title: 'OF COUNSEL',
            email: 'rbp@mg-ip.com',
            phone: '(703)621-7140',
            photo: jayK, // Replace with the path to the photo
            education: 'IP',
            memberships: ''
          },
          {
            id: 23,
            name: 'Jeffrey E. Santry',
            title: 'OF COUNSEL',
            email: 'jes@mg-ip.com',
            phone: '(703)621-7140',
            photo: jeffreyS, // Replace with the path to the photo
            education: 'Patent, Trademark',
            memberships: 'ABA-IPL, IEEE, Communications Society and Computer Society'
          },
          {
            id: 24,
            name: 'Simone Chen',
            title: 'ASSOCIATE',
            email: 'simone@mg-ip.com',
            phone: '(703)621-7140',
            photo: simone, // Replace with the path to the photo
            education: 'Patent, Trademark',
            memberships: ''
          },
          {
            id: 25,
            name: 'Roman Campos',
            title: 'ASSOCIATE',
            email: 'arc@mg-ip.com',
            phone: '(703)621-7140',
            photo: roman, // Replace with the path to the photo
            education: 'Patent, Trademark',
            memberships: 'INTA, ASIPI, ABA, NYSBA'
          },
          {
            id: 26,
            name: 'Ching (Tony) Chang',
            title: 'ASSOCIATE',
            email: 'tcc@mg-ip.com',
            phone: '(703)621-7140',
            photo: roman, // Replace with the path to the photo
            education: 'Communication Engineering, Electrical Engineering, Telecommunications',
            memberships: ''
          },
          {
            id: 27,
            name: 'Tetsu Yoshida',
            title: 'PATENT AGENT',
            email: 'tetsu.yoshida@mg-ip.com',
            phone: '(703)621-7140',
            photo: tetsu, // Replace with the path to the photo
            education: 'Patent',
            memberships: 'Japanese Patent Attorneys Association'
          },
          {
            id: 28,
            name: 'Tingting Liu',
            title: 'PATENT AGENT',
            email: 'tetsu.yoshida@mg-ip.com',
            phone: '(703)621-7140',
            photo: tingting, // Replace with the path to the photo
            education: 'Chemistry, Biotechnology',
            memberships: ''
          },
          {
            id: 29,
            name: 'Tingting Liu',
            title: 'PATENT AGENT',
            email: 'tetsu.yoshida@mg-ip.com',
            phone: '(703)621-7140',
            photo: tingting, // Replace with the path to the photo
            education: 'Chemistry, Biotechnology',
            memberships: ''
          },
          {
            id: 30,
            name: 'Yu-Te (Terry) Chen',
            title: 'PATENT AGENT',
            email: 'ytc@mg-ip.com',
            phone: '(703)621-7140',
            photo: terry, // Replace with the path to the photo
            education: 'Patent , Biochemistry',
            memberships: ''
          },
          {
            id: 31,
            name: 'A. Shay Canfield',
            title: 'TECHNICAL ADVISOR',
            email: 'asc@mg-ip.com',
            phone: '(703)621-7140',
            photo: shay, // Replace with the path to the photo
            education: 'Patent , Biotechnology',
            memberships: ''
          },
          {
            id: 32,
            name: 'Kentaro Higuchi',
            title: 'TECHNICAL ADVISOR',
            email: 'kentaro.higuchi@mg-ip.com',
            phone: '(703)621-7140',
            photo: shay, // Replace with the path to the photo
            education: 'Patent , IP',
            memberships: ''
          },
          {
            id: 33,
            name: 'Akiyo Yoshida',
            title: 'TECHNICAL ADVISOR',
            email: 'akiyo.yoshida@mg-ip.com',
            phone: '(703)621-7140',
            photo: akiyo, // Replace with the path to the photo
            education: 'Translate',
            memberships: ''
          },
          {
            id: 34,
            name: 'Susan Brady Blasco',
            title: 'INTELLECTUAL PROPERTY ADVISOR',
            email: 'sbb@mg-ip.comm',
            phone: '(703)621-7140',
            photo: susan, // Replace with the path to the photo
            education: 'IP',
            memberships: ''
          },
          {
            id: 35,
            name: 'Sherri Weisbeck-Raslich',
            title: 'INTELLECTUAL PROPERTY ADVISOR',
            email: 'swr@mg-ip.com',
            phone: '(703)621-7140',
            photo: sherri, // Replace with the path to the photo
            education: 'Trademark',
            memberships: ''
          },
          {
            id: 36,
            name: 'Christopher Emond',
            title: 'INTELLECTUAL PROPERTY ADVISOR',
            email: 'cemond@mg-ip.com',
            phone: '(703)621-7140',
            photo: christopher, // Replace with the path to the photo
            education: 'Trademark',
            memberships: ''
          },
          {
            id: 37,
            name: 'Soon Chung',
            title: 'CONTROLLER',
            email: 'syc@mg-ip.com',
            phone: '(703)621-7140',
            photo: soon, // Replace with the path to the photo
            education: 'Financial',
            memberships: ''
          },
          {
            id: 38,
            name: 'Sally Mueller, SHRM-CP',
            title: 'OFFICE MANAGER',
            email: 'sm@mg-ip.com',
            phone: '(703)621-7140',
            photo: sally, // Replace with the path to the photo
            education: '',
            memberships: ''
          },
        // ...more members
      ];
    return(
        <Router>
            <div className='App'>
                <NavBar/>
                <main>

                    <Routes>
                        <Route path="/" element={<About />}/>
                        <Route path="/MGIP_Web" element={<About />}/>
                        <Route path="/team" element={<Team members={teamMembers}/>}/>
                        <Route path="/MGIP_Web/team" element={<Team members={teamMembers}/>}/>
                    </Routes>
                
                </main>
                <Footer/>
            </div>
        </Router>
    )
}

export default App
