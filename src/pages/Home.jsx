import React from 'react';
import ''
import Navbar from '../components/Layout/navbar';

function HomePage() {
    const user = null;
  return (
    <>
      <Navbar user={user}/>
      <body>
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
            <div className="d-sm-flex align-items-center justify-content-between">
              <div>
                <h1>Keep track of the <span className="text-success"> best eats</span> around!</h1>
                <p className="lead my-4">
                  With <span className="text-success">SIK THE DAY</span>, you never have to wonder what to eat again.
                  Great for food enthusiasts of all ages.
                </p>
                <a href="/signup" className="btn btn-success btn-lg">Sign Up </a>
              </div>
              <img className="img-fluid w-50 d-none d-sm-block" src="/images/undraw_eating_together_re_ux62.svg" alt="people eating food" />
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
                      We're like your favorite book rating app but for restaurants.
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
                      Lists
                    </h3>
                    <p className="card-text">
                      SIK THE DAY is an easy way to keep track of where you've been and where you want to be.
                    </p>
                    <a href="/places" className="btn btn-success">Add to List</a>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card bg-dark text-light">
                  <div className="card-body text-center">
                    <div className="h1">
                      <i className="bi bi-lightbulb-fill"></i>
                    </div>
                    <h3 className="card-title">
                      Selector
                    </h3>
                    <p className="card-text">
                      Our Selector feature helps you choose what to eat tonight from somewhere you already know and love.
                    </p>
                    <a href="/selector" className="btn btn-success">Use Selector</a>
                  </div>
                </div>
              </div>
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
                <h2>What do you want to eat?</h2>
                <p className="lead">
                  It's the question that comes up so often and yet we are woefully unprepared to answer it.
                </p>
                <p>
                  So, we built a way to help you organize your thoughts and food dreams. Rate places you've been, give your favorites a star, and get a little help choosing when "nothing sounds good."
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
                <h2>What was that place called?</h2>
                <p className="lead">
                  <span className="text-success">SIK THE DAY</span> helps you remember the little things. From the atmosphere and location to the taste of what you ordered, you can record everything your future self will want to know.
                </p>
                <p>
                  While you can always write lengthy notes, we'd also love to hear if there's a feature that would help you keep track of places you've eaten! Feel free to drop us a line and let us know your idea.
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
            What does "sik the day" mean?
          </button>
        </h2>
        <div id="question-one"
          className="accordion-collapse collapse show"
          aria-labelledby="question-one"
          data-bs-parent="#questions">
          <div className="accordion-body">
            <strong>If you're a linguistics nerd, you'll love this. Everyone else, prepare yourselves.</strong> "Sik the day" is a play on words involving three languages. It comes from the English translation (seize the day) of the Latin phrase, "Carpe Diem," As for the "sik", this app started as a place to keep track of authentic dim sum restaurants and the Cantonese word for eat is sik (食).
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
            How much does it cost?
          </button>
        </h2>
        <div id="question-two"
          className="accordion-collapse collapse"
          aria-labelledby="question-two"
          data-bs-parent="#questions">
          <div className="accordion-body">
            <strong>It's our favorite price: free!</strong> Feel free to make as many entries as your heart desires.
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
            How do I get started?
          </button>
        </h2>
        <div id="question-three"
          className="accordion-collapse collapse"
          aria-labelledby="question-three"
          data-bs-parent="#questions">
          <div className="accordion-body">
            <strong>All you have to do is sign up!</strong> Creating a profile takes less than a minute and then you can start writing those reviews. <a href="/signup" className="text-primary">Click here to start your rating journey with SIK THE DAY</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<footer>
  {/* Assuming 'partials/footer' is a separate component */}
  {/* Include footer component here */}
</footer>
</body>
</>
  );
};
export default HomePage;

