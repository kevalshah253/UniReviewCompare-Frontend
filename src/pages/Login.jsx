import React, { useRef } from 'react';
import '../css/style.css';
import '../css/custom.css';
import HomePage from './Home';
import { useNavigate } from 'react-router-dom';
import alertify from 'alertifyjs';

const Login = () => {
    const userEmail = useRef();
    const userPassword = useRef();
    const navigate = useNavigate(); 

    async function handleSubmit(event) {
        event.preventDefault();
    
        // Check if the refs are defined before accessing their value property
        if (userEmail.current && userPassword.current) {
            const email = userEmail.current.value;
            const password = userPassword.current.value;
    
            try {
                const response = await fetch('http://localhost:8000/v1/login/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });
    
                if (!response.ok) {
                    throw new Error('Invalid credentials');
                }
    
                const user = await response.json();
    
                localStorage.setItem('user', JSON.stringify(user));
                //onLogin(user); // Update user state in parent component
                alertify.success('Success!');
                navigate('/dashboard');
            } catch (error) {
                console.error(error);
                alertify.error('Something went wrong!');
            }
    
            // Clear input values after form submission
            userEmail.current.value = "";
            userPassword.current.value = "";
        }
    }
    

    return (
        <>
            <div className="blur-overlay"></div>
            <HomePage />

            <div className="login-container">
                <section className="bg-login text-light p-5">
                    <div className="container">
                        <h1 className="text-light">Log In</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input ref={userEmail} type="email" className="form-control" name="email" aria-label="email" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input ref={userPassword} type="password" className="form-control" name="password" aria-label="password" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </section>
                <section className="bg-light text-dark p-5">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md p-5">
                                <h2>Welcome Back!</h2>
                                <p className="lead">
                                    Found your school yet? Leave some reviews
                                </p>
                                <p>Don't have an account yet?</p>
                                <a href="/signup" className="btn btn-light align-items-left">
                                    <i className="bi bi-chevron-right"></i>Sign Up
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Login;
