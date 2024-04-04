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

function App() {
    const teamMembers = [
        {
          id: 1,
          name: 'Joe M. (Ken) Muncy',
          title: 'PRINCIPAL SHAREHOLDER',
          location: 'Alexandria Virginia',
          phone: '111-111-1111',
          photo: joe, // Replace with the path to the photo
          keywords: 'tech specialist'
        },
        {
            id: 2,
            name: 'Martin R. Geissler',
            title: 'PRINCIPAL SHAREHOLDER',
            location: 'Alexandria Virginia',
            phone: '111-111-1111',
            photo: martin, // Replace with the path to the photo
            keywords: 'tech specialist'
          },
          {
            id: 3,
            name: 'Mark E. Olds',
            title: 'PRINCIPAL SHAREHOLDER',
            location: 'Alexandria Virginia',
            phone: '111-111-1111',
            photo: mark, // Replace with the path to the photo
            keywords: 'tech specialist'
          },
          {
            id: 4,
            name: 'Scott L. Lowe',
            title: 'PRINCIPAL SHAREHOLDER',
            location: 'Alexandria Virginia',
            phone: '111-111-1111',
            photo: scott, // Replace with the path to the photo
            keywords: 'tech specialist'
          },
          {
            id: 5,
            name: 'John L. Ciccozzi',
            title: 'PRINCIPAL SHAREHOLDER',
            location: 'Alexandria Virginia',
            phone: '111-111-1111',
            photo: john, // Replace with the path to the photo
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
