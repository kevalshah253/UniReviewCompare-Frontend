import React from 'react';

function Navbar({ user }) {
  return (
    <nav className="nav navbar navbar-expand-md bg-dark navbar-dark fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand">SIK THE DAY</a>      

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
                  <a href="/login" className="nav-link">Login</a>
                </li>
                <li className="nav-item">
                  <a href="/signup" className="nav-link btn btn-success text-dark">Signup</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a href="/profile" className="nav-link">Profile</a>
                </li>
                <li className="nav-item">
                  <a href="/places" className="nav-link">Lists</a>
                </li>
                <li className="nav-item">
                  <a href="/selector" className="nav-link">Selector</a>
                </li>
                <li className="nav-item">
                  <a href="/logout" className="nav-link">Logout</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
