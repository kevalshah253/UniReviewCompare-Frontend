import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h2>Welcome to University Review</h2>
            <p>This platform allows you to share your experiences about universities and make informed decisions.</p>
            <p>Please <Link to="/login">login</Link> or <Link to="/register">register</Link> to get started.</p>
        </div>
    );
};

export default HomePage;
