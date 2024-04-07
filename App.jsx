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
            education: 'Mechanical, Electrical Engineering, electro-mechanical, design patent prosecution',
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
