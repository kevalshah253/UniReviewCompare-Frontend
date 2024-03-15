import React from 'react';
import '../css/style.css';
import '../css/custom.css';
import log from '../images/im1.jpeg';
import uni from '../images/uni.jpeg'

function HomePage() {
    
  return (
    <>
        {/* <div className="modal fade" id="newsletterModal" tabIndex="-1" aria-labelledby="newsletterModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="newsletterModalLabel">Sign up for our newsletter</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Submission successful! Thanks for joining!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div> */}
        {/* Hero Section */}
        <section className="bg-dark text-light p-4 p-lg-0 pt-5 text-center text-sm-start">
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between animated fadeInCenter">
              <div>
                <h1>Make the <span className="text-success"> BEST COLLEGE</span> choices!</h1>
                <p className="lead my-4">
                  With <span className="text-success">UNI-COMPARE</span>, you never have to wonder which university to choose.
                  All the details you need in one place!.
                </p>
                <a href="/signup" className="btn btn-success btn-lg">Sign Up </a>
              </div>
              <img className="rounded-5 img-fluid w-40 animated fadeInRight" src={log} alt="people on campus" />
            </div>
          </div>
        </section>
         {/* Wave Transition */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" transform="rotate(180)">
        <path fill="#343a40" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1046.7,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path fill="#dee2e6" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1046.7,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      {/* Next Section */}
      <section className="p-5 text-dark bg-explore">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src={uni} className="rounded-circle img-fluid animated fadeInLeft" alt="university building" />
            </div>
            <div className="col-md p-5">
              <h2>Explore Universities</h2>
              <p className="lead">
                Discover a wide range of universities around the world. Uni-Compare provides detailed information about each university, including programs offered, admission requirements, campus facilities, and more.
              </p>
              <a href="/universities" className="btn btn-success mt-3">Explore Now</a>
            </div>
          </div>
        </div>
      </section>
      <section id="learn" className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>What was that university called?</h2>
              <p className="lead">
                <span className="text-success">UNI-COMPARE</span> helps you remember the little things. From the campus atmosphere and location to the quality of education, you can record everything your future self will want to know.
              </p>
              <p>
                While you can always write lengthy notes, we'd also love to hear if there's a feature that would help you keep track of universities you've researched! Feel free to drop us a line and let us know your idea.
              </p>
              <a href="/contact" className="btn btn-light text-light mt-3">
                <i className="bi bi-chevron-right"></i>Contact Us
              </a>
            </div>
            <div className="col-md">
              <img src="/images/undraw_conversation_re_c26v.svg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="p-5">
          <div className="container">
            <div className="row text-center g-4">
              <div className="col-md">
                <div className="card bg-dark text-light">
                  <div className="card-body text-center">
                    <div className="h1">
                      <i className="bi bi-info-square"></i>
                    </div>
                    <h3 className="card-title">
                      About Us
                    </h3>
                    <p className="card-text">
                      We're like your favorite book rating app but for Colleges.
                    </p>
                    <a href="#questions" className="btn btn-success">Read Our FAQs</a>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card bg-dark text-light">
                  <div className="card-body text-center">
                    <div className="h1">
                      <i className="bi bi-list-ul"></i>
                    </div>
                    <h3 className="card-title">
                      Review
                    </h3>
                    <p className="card-text">
                      Uni-Compare is an easy way to keep track of where you've been and where you want to be.
                    </p>
                    <a href="/places" className="btn btn-success">Review Schools</a>
                  </div> </div>
              </div>
              <div className="col-md">
                <div className="card bg-dark text-light">
                  <div className="card-body text-center">
                    <div className="h1">
                      <i className="bi bi-lightbulb-fill"></i>
                    </div>
                    <h3 className="card-title">
                      Compare
                    </h3>
                    <p className="card-text">
                      Our Compare feature helps compare 2 or 3 schools side by side 
                    </p>
                    <a href="/selector" className="btn btn-success">Use Compare Tool</a>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </section>

      <section id="questions" className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">
            Frequently Asked Questions
          </h2>
          <div className="accordion" id="questions" aria-label="Accordion Control Group Buttons">
            {/* Question 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button text-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  What does "Uni-Compare" mean?
                </button>
              </h2>
              <div id="question-one"
                className="accordion-collapse collapse show"
                aria-labelledby="question-one"
                data-bs-parent="#questions">
                <div className="accordion-body">
                  <strong>If you're a prospective student, you'll love this. Everyone else, prepare yourselves.</strong> "Uni-Compare" is a platform designed to help students make informed decisions about their university choices by providing comprehensive comparisons between different universities.
                </div>
              </div>
            </div>
            {/* Question 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button text-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  How much does it cost to use Uni-Compare?
                </button>
              </h2>
              <div id="question-two"
                className="accordion-collapse collapse"
                aria-labelledby="question-two"
                data-bs-parent="#questions">
                <div className ="accordion-body">
                  <strong>It's absolutely free!</strong> Uni-Compare is a free platform for all users. Feel free to explore and compare universities without any cost.
                </div>
              </div>
            </div>
            {/* Question 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button text-primary "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  How do I get started with Uni-Compare?
                </button>
              </h2>
              <div id="question-three"
                className="accordion-collapse collapse"
                aria-labelledby="question-three"
                data-bs-parent="#questions">
                <div className="accordion-body">
                  <strong>Getting started with Uni-Compare is easy!</strong> Simply sign up for an account, and you'll gain access to all the features of our platform. Creating a profile takes less than a minute, and then you can start comparing universities based on your preferences and needs.
                  <a href="/signup" className="text-primary">Click here to start your university comparison journey with Uni-Compare</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
