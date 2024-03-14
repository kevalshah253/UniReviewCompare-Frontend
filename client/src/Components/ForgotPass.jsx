import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Input } from 'antd';

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        password: '',
        repassword: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleLoginClick = async (e) => {
        e.preventDefault();
        if (formData.password === '' || formData.repassword === '') {
            toast.error("All fields are required");
            return;
        }
        if (formData.password !== formData.repassword) {
            toast.error("Passwords do not match");
            return;
        }
        const dataToSend = {
            new_password: formData.password,
            email: window.localStorage.getItem("ForgotEmail")
        };
        try {
            const response = await axios.put('http://localhost:8000/v1/reset-password-after-otp/', dataToSend);
            const data = await response;       
            console.log(data)
            if (data.status === 200) {
                localStorage.clear()
                toast.success("Password Reset Successfully");
                window.location.replace("/login")
            } else {
                toast.error(data.message || data.error);
            }
        } catch (err) {
            console.error(err);
            toast.error(err.response.data.detail);
        }
    };
   
    useEffect(() => {
        const email = window.localStorage.getItem("ForgotEmail");
        const otpVerified = window.localStorage.getItem("otpVerified");
        if(!email){
            window.location.replace("/forgot-password/email");
        }
        if(email && otpVerified === "false"){
            window.location.replace("/forgot-password/validation");
        }
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Toaster />
            <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />


            {/* <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${helloImage.src})` }}></div> */}
            <div className='w-full min-h-screen items-center flex justify-center'>
                <div className="lg:w-1/2 p-12 items-center p-16 mx-auto bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-extrabold text-gray-800">Forgot Password</h1>
                    <form className="mt-8">
                        {/* Email Input */}                        
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                            <Input.Password placeholder="Enter Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
                                id="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />

                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label htmlFor="repassword" className="block text-sm font-medium text-gray-600">Retype Password</label>
                            <Input.Password placeholder="Retype Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
                                id="repassword"
                                value={formData.repassword}
                                onChange={handleInputChange}
                            />

                        </div>

                        <div><Link to="/login">
                            <button
                                type="button"
                                className="px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Go Back
                            </button>
                            </Link>
                            <button
                                type="button"
                                onClick={handleLoginClick}
                                className="px-4 ml-8 py-2 text-white bg-green-700 rounded-md hover:bg-green-800 focus:outline-none focus:ring focus:border-green-300"
                            >
                                Reset Password
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;