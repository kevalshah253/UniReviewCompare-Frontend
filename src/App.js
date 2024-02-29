import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import Navbar from './components/Layout/navbar';
// Import other pages here
// import Footer from './components/Layout/Footer';

const App = () => {
    return (
        <>
            <BrowserRouter>
                
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* Add routes for other pages */}
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
