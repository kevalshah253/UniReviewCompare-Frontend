import React from 'react';

const Footer = () => {
  return (
    <footer className="p-5 bg-dark text-white text-center position-relative mt-auto">
      <div className="container">
        <p className="lead">Copyright &copy; UNI-COMPARE</p>
        <a href="#" className="position-absolute bottom-0 end-0 p-5" aria-label="go to top of page">
          <i className="bi bi-arrow-up-circle h1 text-success"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
