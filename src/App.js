import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import Navbar from './components/Layout/navbar';
import Footer from './components/Layout/footer';
// Import other pages here
// import Footer from './components/Layout/Footer';

const App = () => {
    const user = null;
    return (
        <>
            <BrowserRouter>
            <Navbar user={user}/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* Add routes for other pages */}
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
};

export default App;
