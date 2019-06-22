import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <img className="header__logo" src="images/logo.svg" />
        <div className="header__title centered-vericaly"><h1>GitHub organisations</h1></div>
        <div className="header__menu-wrapper">
          <nav>
            <ul className="header__menu centered-vericaly">
              <li className="header__menu-item">
                <Link to="/">Home page</Link>
              </li>  
            </ul>
          </nav>
        </div>
      </div>
    </div> 
  </header>
)

export default Header