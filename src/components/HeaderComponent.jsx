import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderComponent() {
  return (
    <div className=''>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark text-white'>
            <div>
                <a href="http://localhost:5173" className='navbar-brand ms-5'>
                    Todo Management app
                </a>
            </div>
            <div className="collapse navbar-collapse ">
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink to="/register" className="nav-link">Register</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/login" className="nav-link">Login</NavLink>
                </li>
              </ul>
            </div>
        </nav>
    </div>
  )
}
