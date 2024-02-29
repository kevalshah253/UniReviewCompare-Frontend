import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
    return (
        <nav>
            <div className="container">
                <h1>University Review</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {isAuthenticated ? (
                        <>
                            <li><Link to="/profile">Profile</Link></li>
                            {/* Add other authenticated links */}
                        </>
                    ) : (
                        <>
                            <div class="global-nav__account__logged-out">
                                        <button class="button button-small button-darker global-nav__account-login" data-after-sherlock="true">Log In</button>
                                        <button class="button button-small button-darker global-nav__account-signup">Sign &nbsp;Up</button>
                            </div>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
