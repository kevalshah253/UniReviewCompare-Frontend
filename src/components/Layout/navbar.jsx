import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') !== null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="nav navbar navbar-expand-md bg-dark navbar-dark fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand">UNI-COMPARE</a>      

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-label="menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            {!isLoggedIn ? (
              <>
                <li className="nav-item px-2">
                  <a href="/login" className="nav-link btn">Login</a>
                </li>
                <li className="nav-item">
                  <a href="/signup" className="nav-link btn btn-success text-dark">Signup</a>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <a href="/" className="nav-link" onClick={handleLogout}>Logout</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
