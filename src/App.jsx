import { useState } from 'react'
import {About} from './components/About/About'
import {Team} from './components/Team/Team'
import {NavBar} from './components/NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

    const [backgroundCount, setBackgroundCount] = useState(0);
    return(
        <Router>
            <div className='App'>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<About  backgroundCount={backgroundCount} setBackGroundCount={setBackgroundCount}/>}/>
                    <Route path="/team" element={<Team/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App
