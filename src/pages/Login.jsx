import React from 'react';
import '../css/style.css';
import '../css/custom.css';
import HomePage from './Home';

const Login = () => {
  return (
    <>
        {/* {messages.errors && messages.errors.map((el, index) => (
          <div key={index} className="alert alert-danger">{el.msg}</div>
        ))}
        {messages.info && messages.info.map((el, index) => (
          <div key={index} className="alert alert-danger">{el.msg}</div>
        ))} */}
         <div className='blur-overlay'></div>
         <HomePage/>
        <div className="login-container">
        <section className="bg-login text-light p-5">
          {/* {messages.errors && messages.errors.map((el, index) => (
            <div key={index} className="alert alert-danger">{el.msg}</div>
          ))} */}
          <div className="container">
            <h1 className="text-light">Log In</h1>
            <form action="/login" method="POST">
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
