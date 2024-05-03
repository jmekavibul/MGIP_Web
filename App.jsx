import { useState } from 'react'
import {About} from './components/About/About'
import {Team} from './components/Team/Team'
import {NavBar} from './components/NavBar/NavBar'
import BioPage from './components/BioPage/BioPage';

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
import kentaro from './pictures/Kentaro-Higuchi.jpg';
import akiyo from './pictures/Akiyo-Yoshida.jpg';
import susan from './pictures/Susan_340x464.jpg';
import sherri from './pictures/Sherri_340x464.jpg';
import christopher from './pictures/ChrisE_340x464.jpg';
import soon from './pictures/SooC_340x464.jpg';
import sally from './pictures/Sally_Mueller_340x464.jpg';
import Scrollbars from 'rc-scrollbars';
import Contact from './components/Contact/Contact';

function App() {
    const teamMembers = [
        {
          id: "Ken",
          name: 'Joe M. (Ken) Muncy',
          email: 'km@mg-ip.com',
          title: 'PRINCIPAL SHAREHOLDER',
          phone: '(703)621-7140 x 101',
          photo: joe, // Replace with the path to the photo
          education: ["Georgia Institute of Technology (B.S., Industrial Engineering, 1982)", "George Mason University School of Law (J.D., 1988)"],
          memberships:["American Intellectual Property Law Association", "International Trademark Association (INTA)", "AIPPI (Association Internationale pour la Protection de la Propriété Intellectuelle)", "FICPI (Fédératiion Internationale Des Conseils En Propriété Intellectuelle)", "ASIPI (Asociaciόn Interamericana de la Propieda Intelectual)"],
          bar: ["Commonwealth of Virginia", "U.S. District Court, Eastern District of Virginia", "U.S. Court of Appeals, Federal Circuit", "registered to practice before the U.S. Patent and Trademark Office"],
          experience: ["Mr. Muncy focuses his practice on patent prosecution and patent infringement issues for both U.S. and foreign clients. This work includes the preparation and prosecution of many patent applications and the preparation of various infringement, non-infringement and validity opinions. Mr. Muncy also has extensive experience drafting and prosecuting design patent applications, preparing and prosecuting reissue and reexamination applications, and handling appeals before the Patent Trial Appeal Board.", "Mr. Muncy’s specific areas of expertise include the mechanical and electromechanical fields, such as semiconductors, light emitting devices, motors, valves, switches, printed electronics, medical devices, optics, aeronautics, accelerometers, batteries, hydraulics, fuel cells, marine vessels, propulsion systems, touch panels, heat sinks, computer peripheral devices, gambling machines, as well as various ornamental designs for design applications including graphical user interfaces (GUIs), LEDs, bottles, computer cases, automotive parts, cell phone cases and hover boards. Presentations about IP topics have been given by Mr. Muncy in the US, as well as in Canada, Sweden, Denmark, Finland, Australia, Japan, China, Taiwan, Turkey and Dubai."]
        },
        {
            id: "Martin",
            name: 'Martin R. Geissler',
            title: 'PRINCIPAL SHAREHOLDER',
            phone: '(703)621-7140',
            email: 'mrg@mg-ip.com',
            photo: martin, // Replace with the path to the photo
            education: 'Electrical Engineering technology',
            memberships: ' American Bar Association, American Intellectual Property Law Association, VPP'
          },
          {
            id: "Mark",
            name: 'Mark E. Olds',
            title: 'PRINCIPAL SHAREHOLDER',
            email: 'meo@mg-ip.com',
            phone: '(703)621-7140',
            photo: mark, // Replace with the path to the photo
            education: 'Telecommunications',
            memberships: 'American Bar Association, American Intellectual Property Law Association, and Virgina State Bar Intellectual Property Law Section.'

          },
          {
            id: "Scott",
            name: 'Scott L. Lowe',
            title: 'PRINCIPAL SHAREHOLDER',
            email: 'sll@mg-ip.com',
            phone: '(703)621-7140',
            photo: scott, // Replace with the path to the photo
            education: 'Mechanical Engineering, Electrical Engineering, Electro-Mechanical, design patent prosecution',
            memberships: ''
          },
          {
            id: "John",
            name: 'John L. Ciccozzi',
            title: 'PRINCIPAL SHAREHOLDER',
            email: 'jlc@mg-ip.com',
            phone: '(703)621-7140',
            photo: john, // Replace with the path to the photo
            education: 'Electrical Engineering'
          },
          {
            id: "Daniel",
            name: 'Daniel Podhajny',
            title: 'PRINCIPAL SHAREHOLDER',
            email: 'dp@mg-ip.com',
            phone: '(703)621-7140',
            photo: daniel, // Replace with the path to the photo
            education: 'Computer Engineering, EV, Cybersecurity, Telecommunications'
          },          
          {
            id: "Scott",
            name: 'Scott M. Tulino',
            title: 'PRINCIPAL SHAREHOLDER',
            email: 'smt@mg-ip.com',
            phone: '(703)621-7140',
            photo: scott_m, // Replace with the path to the photo
            education: 'Mechanical Engineering, Chemical, Electro-Mechanical',
            memberships: ''
          },
          {
            id: "Aaron",
            name: 'Aaron J. Sanders',
            title: 'PRINCIPAL SHAREHOLDER',
            email: 'ajs@mg-ip.com',
            phone: '(703)621-7140',
            photo: aaron, // Replace with the path to the photo
            education: 'Computer Science, Telecommunications ',
            memberships: ''
          },
          {
            id: "Jay",
            name: 'Jay Hines',
            title: 'PRINCIPAL',
            email: 'jh@mg-ip.com',
            phone: '(703)621-7140',
            photo: jay, // Replace with the path to the photo
            education: 'Copyright, Trademark',
            memberships: 'Member – International Trademark Association (INTA)'
          },
          {
            id: "Jeffrey",
            name: 'Jeffrey H. Kaufman',
            title: 'PRINCIPAL',
            email: 'jhk@mg-ip.com',
            phone: '(703)621-7140',
            photo: jeffrey, // Replace with the path to the photo
            education: 'Copyright, Trademark',
            memberships: 'American Intellectual Property Law Association (AIPLA), International Trademark Association (INTA)'
          },
          {
            id: "Roberta",
            name: 'Roberta S. Bren',
            title: 'PRINCIPAL',
            email: 'rsb@mg-ip.com',
            phone: '(703)621-7140',
            photo: roberta, // Replace with the path to the photo
            education: 'IP, Trademark',
            memberships: 'American Bar Association (ABA), International Trademark Association (INTA)'
          },
          {
            id: "Allison",
            name: 'Allison M. Tulino',
            title: 'PRINCIPAL',
            email: 'amt@mg-ip.com',
            phone: '(703)621-7140',
            photo: allison, // Replace with the path to the photo
            education: 'Industrial Engineering, Mechanical Engineering, Electrical, Automotive',
            memberships: ''
          },
          {
            id: "Leo",
            name: 'Leo V. Gureff',
            title: 'PRINCIPAL',
            email: 'lvg@mg-ip.com',
            phone: '(703)621-7140',
            photo: leo, // Replace with the path to the photo
            education: 'Trademarks, Copyrights, Patents,  Trade Secrets, IP',
            memberships: 'AIPPI, International Association for the Protection of Intellectual Property, American Intellectual Property Law Association (AIPLA)'
          },
          {
            id: "Mary",
            name: 'Mary Frances Love',
            title: 'PRINCIPAL',
            email: 'maryfran@mg-ip.com',
            phone: '(703)621-7140',
            photo: mary, // Replace with the path to the photo
            education: 'Trademarks, Copyrights, Patents,  Trade Secrets, IP',
            memberships: ''
          },
          {
            id: "Rebeccah",
            name: 'Rebeccah Gan',
            title: 'PRINCIPAL',
            email: 'rgan@mg-ip.com',
            phone: '(703)621-7140',
            photo: rebeccah, // Replace with the path to the photo
            education: 'Trademarks',
            memberships: 'INTA, ABA-IPL, APPI-US, FICPI'
          },
          {
            id: "Rebeccah",
            name: 'Floyd E. Canfield',
            title: 'PRINCIPAL',
            email: 'fec@mg-ip.com',
            phone: '(703)621-7140',
            photo: floyd, // Replace with the path to the photo
            education: 'Biotechnology, Biological Sciences',
            memberships: ''
          },
          {
            id: "David",
            name: 'H. David Starr',
            title: 'PRINCIPAL',
            email: 'hds@mg-ip.com',
            phone: '(703)621-7140',
            photo: david, // Replace with the path to the photo
            education: 'Trademark',
            memberships: 'International Trademark Association (INTA)'
          },
          {
            id: "Robert",
            name: 'Robert F. Gnuse',
            title: 'OF COUNSEL',
            email: 'rfg@mg-ip.com',
            phone: '(703)621-7140',
            photo: robert, // Replace with the path to the photo
            education: 'Electrical, Electro-Mechanical, Mechanical Engineering ',
            memberships: ''
          },
          {
            id: "Rui",
            name: 'Rui W. Geissler',
            title: 'OF COUNSEL',
            email: 'rwg@mg-ip.com',
            phone: '(703)621-7140',
            photo: rui, // Replace with the path to the photo
            education: 'Electrical, Electro-Mechanical, Mechanical Engineering',
            memberships: 'Member of INTA Committee , Teaching US Legal Writing, Research and Analysis as Adjunct Professor at Georgetown University Law Center since 2022'
          },
          {
            id: "Hyung",
            name: 'Hyung N. Sohn',
            title: 'OF COUNSEL',
            email: 'hns@mg-ip.com',
            phone: '(703)621-7140',
            photo: hyung, // Replace with the path to the photo
            education: 'Electrical Engineering, Computer Science, Telecommunications, ',
            memberships: ''
          },
          {
            id: "Marcus",
            name: 'Marcus H. Luepke',
            title: 'OF COUNSEL',
            email: 'mhl@mg-ip.com',
            phone: '(703)621-7140',
            photo: marcus, // Replace with the path to the photo
            education: 'Trademark',
            memberships: 'GRUR, ECTA, INTA, MARQUES'
          },
          {
            id: "JayK",
            name: 'Jay Klinck',
            title: 'OF COUNSEL',
            email: 'kjk@mg-ip.com',
            phone: '(703)621-7140',
            photo: jayK, // Replace with the path to the photo
            education: 'Electrical Engineering, Machanical Engineering, ',
            memberships: 'GRUR, ECTA, INTA, MARQUES'
          },
          {
            id: "RobertP",
            name: 'Robert “Bob” Polit',
            title: 'OF COUNSEL',
            email: 'rbp@mg-ip.com',
            phone: '(703)621-7140',
            photo: robertP, // Replace with the path to the photo
            education: 'IP',
            memberships: ''
          },
          {
            id: "JeffreyS",
            name: 'Jeffrey E. Santry',
            title: 'OF COUNSEL',
            email: 'jes@mg-ip.com',
            phone: '(703)621-7140',
            photo: jeffreyS, // Replace with the path to the photo
            education: 'Patent, Trademark',
            memberships: 'ABA-IPL, IEEE, Communications Society and Computer Society'
          },
          {
            id: "Simone",
            name: 'Simone Chen',
            title: 'ASSOCIATE',
            email: 'simone@mg-ip.com',
            phone: '(703)621-7140',
            photo: simone, // Replace with the path to the photo
            education: 'Patent, Trademark',
            memberships: ''
          },
          {
            id: "Roman",
            name: 'Roman Campos',
            title: 'ASSOCIATE',
            email: 'arc@mg-ip.com',
            phone: '(703)621-7140',
            photo: roman, // Replace with the path to the photo
            education: 'Patent, Trademark',
            memberships: 'INTA, ASIPI, ABA, NYSBA'
          },
          {
            id: "Tony",
            name: 'Ching (Tony) Chang',
            title: 'ASSOCIATE',
            email: 'tcc@mg-ip.com',
            phone: '(703)621-7140',
            photo: tony, // Replace with the path to the photo
            education: 'Communication Engineering, Electrical Engineering, Telecommunications',
            memberships: ''
          },
          {
            id: "Tetsu",
            name: 'Tetsu Yoshida',
            title: 'PATENT AGENT',
            email: 'tetsu.yoshida@mg-ip.com',
            phone: '(703)621-7140',
            photo: tetsu, // Replace with the path to the photo
            education: 'Patent',
            memberships: 'Japanese Patent Attorneys Association'
          },
          {
            id: "Tingting",
            name: 'Tingting Liu',
            title: 'PATENT AGENT',
            email: 'tetsu.yoshida@mg-ip.com',
            phone: '(703)621-7140',
            photo: tingting, // Replace with the path to the photo
            education: 'Chemistry, Biotechnology',
            memberships: ''
          },
          {
            id: "Terry",
            name: 'Yu-Te (Terry) Chen',
            title: 'PATENT AGENT',
            email: 'ytc@mg-ip.com',
            phone: '(703)621-7140',
            photo: terry, // Replace with the path to the photo
            education: 'Patent , Biochemistry',
            memberships: ''
          },
          {
            id: "Shay",
            name: 'A. Shay Canfield',
            title: 'TECHNICAL ADVISOR',
            email: 'asc@mg-ip.com',
            phone: '(703)621-7140',
            photo: shay, // Replace with the path to the photo
            education: 'Patent , Biotechnology',
            memberships: ''
          },
          {
            id: "Kentaro",
            name: 'Kentaro Higuchi',
            title: 'TECHNICAL ADVISOR',
            email: 'kentaro.higuchi@mg-ip.com',
            phone: '(703)621-7140',
            photo: kentaro, // Replace with the path to the photo
            education: 'Patent , IP',
            memberships: ''
          },
          {
            id: "Akiyo",
            name: 'Akiyo Yoshida',
            title: 'TECHNICAL ADVISOR',
            email: 'akiyo.yoshida@mg-ip.com',
            phone: '(703)621-7140',
            photo: akiyo, // Replace with the path to the photo
            education: 'Translate',
            memberships: ''
          },
          {
            id: "Susan",
            name: 'Susan Brady Blasco',
            title: 'INTELLECTUAL PROPERTY ADVISOR',
            email: 'sbb@mg-ip.comm',
            phone: '(703)621-7140',
            photo: susan, // Replace with the path to the photo
            education: 'IP',
            memberships: ''
          },
          {
            id: "Sherri",
            name: 'Sherri Weisbeck-Raslich',
            title: 'INTELLECTUAL PROPERTY ADVISOR',
            email: 'swr@mg-ip.com',
            phone: '(703)621-7140',
            photo: sherri, // Replace with the path to the photo
            education: 'Trademark',
            memberships: ''
          },
          {
            id: "Christopher",
            name: 'Christopher Emond',
            title: 'INTELLECTUAL PROPERTY ADVISOR',
            email: 'cemond@mg-ip.com',
            phone: '(703)621-7140',
            photo: christopher, // Replace with the path to the photo
            education: 'Trademark',
            memberships: ''
          },
          {
            id: "Soon",
            name: 'Soon Chung',
            title: 'CONTROLLER',
            email: 'syc@mg-ip.com',
            phone: '(703)621-7140',
            photo: soon, // Replace with the path to the photo
            education: 'Financial',
            memberships: ''
          },
          {
            id: "Sally",
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
                        <Route path="/MGIP_Web/contact" element={<Contact/>}></Route>
                        <Route path="/contact" element={<Contact/>}></Route>
                        {teamMembers.map(member => (
                            <Route key={member.id} path={`/MGIP_Web/${member.id}`} element={<BioPage member={member} />}/>
                        ))}
                    </Routes>

                </main>
                <Footer/>
            </div>

        </Router>
    )
}

export default App
