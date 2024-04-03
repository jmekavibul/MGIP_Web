import { useState } from 'react'
import {About} from './components/About/About'
import {Team} from './components/Team/Team'
import {NavBar} from './components/NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import './App.css'
import joe from './pictures/Joe-Muncy.jpg';
function App() {
    const teamMembers = [
        {
          id: 1,
          firstName: 'Joe',
          lastName: 'Ken',
          title: 'Lawyer',
          location: 'Alexandria Virginia',
          phone: '111-111-1111',
          photo: joe, // Replace with the path to the photo
          keywords: 'tech specialist'
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
                        <Route path="/team" element={<Team members={teamMembers}/>}/>
                    </Routes>
                
                </main>
                <Footer/>
            </div>
        </Router>
    )
}

export default App
