import React from 'react';
import HomePage from './Home';

const Register = () => {
  return (
    <>
      {/* {messages.errors && messages.errors.map((el, index) => (
        <div key={index} className="alert alert-danger">{el.msg}</div>
      ))} */}
      <div className='blur-overlay'></div>
         <HomePage/>
         <div className='reg-container'>
      <section className="bg-reg text-light p-5">
        <div className="container">
          <h1 className="text-light">Create an Account</h1>
          <form action="/signup" method="POST">
            <div className="row mb-3">
              <label htmlFor="userName" className="col-sm-2 col-form-label">Username</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="userName" aria-label="username" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" name="email" aria-label="email" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" name="password" aria-label="password" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="confirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" name="confirmPassword" aria-label="confirm password" />
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
