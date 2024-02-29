import React from 'react';
import '../css/style.css';
import '../css/custom.css';
import log from'../images/im1.jpeg';

function HomePage() {
    
  return (
    <>
        <div className="modal fade" id="newsletterModal" tabIndex="-1" aria-labelledby="newsletterModalLabel" aria-hidden="true">
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
        </div>
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

        <section id="learn" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src="/images/undraw_my_personal_files_re_3q0p.svg" className="img-fluid" alt="Person looking at several nondescript menus" />
            </div>
            <div className="col-md p-5">
              <h2>What do you want to study?</h2>
              <p className="lead">
                It's the question that comes up so often and yet we are woefully unprepared to answer it.
              </p>
              <p>
                So, we built a way to help you organize your thoughts and university dreams. Rate universities you've been, give your favorites a star, and get a little help choosing when "nothing sounds good."
              </p>
              <a href="/signup" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i>Sign Up
              </a>
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

      {/* Newsletter Sign Up */}
      <section className="bg-primary text-light p-5">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h2 className="mb-2 mb-md-0">Sign Up For Our Newsletter</h2>
            <div className="input-group news-input">
              <form>
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control  mb-3"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="button-addon2"
                  />
                </div>
                <div className="col-auto">
                  <button className="btn btn-dark btn-lg " type="button" id="button-addon2" data-bs-toggle="modal" data-bs-target="#newsletterModal">Submit</button>
                </div>
              </form>
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
