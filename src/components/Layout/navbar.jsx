import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ user }) {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <body >
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
            {!user ? (
              <>
                <li className="nav-item px-2">
                  <a href="/login" className="nav-link btn">Login</a>
                </li>
                <li className="nav-item">
                  <a href="/signup" className="nav-link btn btn-success text-dark">Signup</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a href="/profile" className="nav-link">Hi, {user}!</a>
                </li>
                <li className="nav-item">
                  <a href="/schools" className="nav-link">Schools</a>
                </li>
                <li className="nav-item">
                  <a href="/compare" className="nav-link">Compare</a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link" onClick={handleLogout}>Logout</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
    </body>
  );
}

export default Navbar;
