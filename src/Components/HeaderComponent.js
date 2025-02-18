import React from 'react';
import '../Styles/Header.css';
import logo_tr from "../files/logo_pool_transperent.png"


export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <span className="logo"> <a href="/" className="nav-link">  <img width={120} height={100} src={logo_tr} alt="Logo"  /></a></span>
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
          <button className="action-button"><a href='registration' className="nav-link">Sign Up</a></button>
          <button className="action-button">Sign In</button>
        </div>
      </div>
    </header>
  );
};
