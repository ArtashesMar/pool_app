import React from 'react';
import '../Styles/Header.css';
import logo_tr from "../files/logo_pool_transperent.png"
import { Link } from 'react-router-dom';
import { MenuComponents } from './MenuComponents';


export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <span className="logo"> <Link to="/"> <img width={120} height={100} src={logo_tr} alt="Logo"  /></Link></span>
         <MenuComponents/>
          <nav>
            <ul className="nav-menu">
            
                </ul>
          </nav>
        </div>

        {/* Search and Actions Section */}
        <div className="actions-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search packages"
              className="search-input"
            />
            <button className="search-button">
              Search
            </button>
          </div>
          <button className="action-button"><Link to="/registration" className="nav-link">Sign Up</Link></button>
          <button className="action-button" > <Link to="/login" className="nav-link">Sign In</Link></button>
        </div>
      </div>
    </header>
  );
};
