import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import Navbar from './components/Layout/navbar';
import Footer from './components/Layout/footer';
import Login from './pages/Login';
import Register from './pages/Register';
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
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Register/>} />
                    <Route path="/dashboard" element={<HomePage />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
};

export default App;
