import { useState } from 'react'
import {About} from './components/About/About'
import {Team} from './components/Team/Team'
import {NavBar} from './components/NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {

    return(
        <Router>
            <div className='App'>
                <NavBar/>
                <main>

                    <Routes>
                        <Route path="/" element={<About />}/>
                        <Route path="/team" element={<Team/>}/>
                    </Routes>
                
                </main>
                <Footer/>
            </div>
        </Router>
    )
}

export default App
