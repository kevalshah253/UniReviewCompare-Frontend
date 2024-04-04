import React, { useState } from 'react';
import HomePage from './Home';
import alertify from 'alertifyjs';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name:'',
    phone:'',
    repassword: '',
});

const handleInputChange = (e) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value
    });
};

const handlleSignupClick = async (e) => {
    e.preventDefault();
    if (formData.email === '' || formData.password === '' || formData.name === '' || formData.phone === '' || formData.repassword === '') {
        //toast.error("All fields are required");
        return;
    }
    if(formData.password !== formData.repassword){
        //toast.error("Password Do not Match")
        return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    
    console.log(formDataToSend)
    try {
        const response = await axios.post('http://localhost:8000/v1/signup/',formData);

        const data = await response;
        console.log(data);            
        if (data.status === 200) {
            window.location.replace('/login');
        } 
    } catch (err) {
        console.error(err);
        //toast.error(err.response.data.detail);
    }
};

    return (
        <>
            <div className='blur-overlay'></div>
            <HomePage />
            <div className='reg-container mt-5'>
                <section className="bg-reg text-light p-5">
                    <div className="container">
                        <h1 className="text-light">Create an Account</h1>
                        <form onSubmit={handlleSignupClick}>
                            <div className="row mb-3">
                                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="name" aria-label="name" value={formData.name} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="email" aria-label="email" value={formData.email} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="phone" aria-label="phone" value={formData.phone} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="password" aria-label="password" value={formData.password} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="repassword" className="col-sm-2 col-form-label">Confirm Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="repassword" aria-label="confirm password" value={formData.repassword} onChange={handleInputChange} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success text-white">Submit</button>
                        </form>
                    </div>
                </section>
                <section className="bg-light text-dark p-5">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md p-5">
                                <h2>Thanks for Signing Up!</h2>
                                <p className="lead">
                                    All the best in your school search!
                                </p>
                                <p>Already have an account?</p>
                                <a href="/login" className="btn btn-light">
                                    <i className="bi bi-chevron-right"></i>Log In
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Register;
