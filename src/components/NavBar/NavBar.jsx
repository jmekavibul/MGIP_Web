import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
export const NavBar = () => {
  return (
    <div className='nav'>
        <div>
            <img src="mgip-logo.png" width={200}></img>
        </div>
        <ul className='nav-menu'>
            <li><Link path="/">About</Link></li>
            <li><Link path="/team">Team</Link></li>
            <li className='nav-contact'><Link path="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}
