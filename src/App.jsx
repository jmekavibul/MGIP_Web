import { useState } from 'react'
import {About} from './components/About/About'
import {Team} from './components/Team/Team'
import {NavBar} from './components/NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
    const teamMembers = [
        {
          id: 1,
          name: 'Ahmed Abdelqader',
          title: 'Technology Specialist',
          location: 'New York',
          phone: '917-956-5951',
          photo: 'dc.jpg', // Replace with the path to the photo
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
