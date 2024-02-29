import React from 'react';
import '../css/style.css';
import '../css/custom.css';
const Login = ({ messages }) => {
  return (
    <>
      <header>
        {/* Assuming 'partials/header' is a separate component */}
        {/* Include header component here */}
      </header>
      <body>
        {messages.errors && messages.errors.map((el, index) => (
          <div key={index} className="alert alert-danger">{el.msg}</div>
        ))}
        {messages.info && messages.info.map((el, index) => (
          <div key={index} className="alert alert-danger">{el.msg}</div>
        ))}
        <section className="bg-dark text-light p-5">
          {messages.errors && messages.errors.map((el, index) => (
            <div key={index} className="alert alert-danger">{el.msg}</div>
          ))}
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
                  We hope you've been to some epic places since your last visit.
                </p>
                <p>Don't have an account yet?</p>
                <a href="/signup" className="btn btn-light align-items-left">
                  <i className="bi bi-chevron-right"></i>Sign Up
                </a>
              </div>
              <div className="col-md">
                <img src="/images/undraw_tasting_re_3k5a.svg" className="img-fluid" alt="People tasting food and rating it" />
              </div>
            </div>
          </div>
        </section>
      </body>
      <footer>
        {/* Assuming 'partials/footer' is a separate component */}
        {/* Include footer component here */}
      </footer>
    </>
  );
};

export default Login;
