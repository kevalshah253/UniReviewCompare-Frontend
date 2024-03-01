import React, { useState } from 'react';
import HomePage from './Home';
import alertify from 'alertifyjs'

const Register = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate successful registration (without server interaction)
    localStorage.setItem("user", true);
    localStorage.setItem('name', formData.userName);
    localStorage.setItem('email', formData.email);
    
    // Redirect to login page
    window.location.href = '/login';
  };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Validate form data (you can add more validation logic here)
//     try {
//       const response = await fetch('/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       if (response.ok) {
//         alertify.success('Success!');
//         window.location.href = '/login';
//       } else {
//         alertify.error('Something went wrong!');
//         console.error('Registration failed');
//         alert('Something went wrong!')
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('An error occurred while submitting the form. Please try again later.');
//     }
//  };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
        ...formData,
        [name]: value
        });
  };

  return (
    <>
      <div className='blur-overlay'></div>
      <HomePage />
      <div className='reg-container'>
        <section className="bg-reg text-light p-5">
          <div className="container">
            <h1 className="text-light">Create an Account</h1>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label htmlFor="userName" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" name="userName" aria-label="username" value={formData.userName} onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" name="email" aria-label="email" value={formData.email} onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" name="password" aria-label="password" value={formData.password} onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="confirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" name="confirmPassword" aria-label="confirm password" value={formData.confirmPassword} onChange={handleChange} />
                </div>
              </div>
              <button type="submit" className="btn btn-success" onSubmit={handleSubmit}>Submit</button>
            </form>
          </div>
        </section>
        <section className="bg-light text-dark p-5">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md p-5">
                <h2>Thanks for Sigining Up!</h2>
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
