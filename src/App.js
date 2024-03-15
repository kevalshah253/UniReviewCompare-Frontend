import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import Navbar from './components/Layout/navbar';
import Footer from './components/Layout/footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const App = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Register/>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
};

export default App;
