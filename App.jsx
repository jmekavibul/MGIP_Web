import { useState } from 'react'
import {About} from './components/About/About'
import {Team} from './components/Team/Team'
import {NavBar} from './components/NavBar/NavBar'
import BioPage from './components/BioPage/BioPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import './App.css'
import Contact from './components/Contact/Contact';
import { teamMembers } from './teamMembers';
function App() {

    return(
        <Router>
            <div className='App'>
                <NavBar/>
                <main>
                    <Routes>
                        <Route path="/" element={<About />}/>
                        <Route path="/MGIP_Web" element={<About />}/>
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
