import { useState } from 'react'
import {About} from './components/About/About'
import {Team} from './components/Team/Team'
import {NavBar} from './components/NavBar/NavBar'
import BioPage from './components/BioPage/BioPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import './App.css'
import Contact from './components/Contact/Contact';
import { teamMembers } from './teamMembers_updated';
import { Careers } from './components/Careers/Careers';
import membershipsData from './membershipMasterList'
import { Disclaimer } from './components/Disclaimer/Disclaimer';
function App() {

    return(
        <Router>
            <div className='App'>
                <NavBar/>
                <main>
                    <Routes>
                        <Route path="/" element={<About />}/>
                        <Route path="/team" element={<Team members={teamMembers}/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/careers" element={<Careers/>}/>
                        {teamMembers.map(member => (
                            <Route key={member.id} path={`/${member.id}`} element={<BioPage member={member} membershipsData={membershipsData}  />}/>
                        ))}
                        <Route path="/disclaimer" element={<Disclaimer/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    )
}

export default App
