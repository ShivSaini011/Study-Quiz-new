import React from 'react';
import './css/About.css';
import Navbar from './Navbar';

const About = () => {
  return (
    <div><Navbar page={"about"} />
    <div className="about-container">
        {/* <div>
        </Navbar>
        </div> */}
      <h1>About E-Learning Hub</h1>
      <p>
        E-Learning Hub is your one-stop platform for expanding knowledge and enhancing skills.
        We offer interactive courses, tutorials, and eBooks tailored to help learners of all levels succeed.
      </p>
      <p>
        Whether you're a beginner or an advanced learner, our resources are designed to support
        your journey in tech, business, and more.
      </p>
    </div>
    </div>
  );
};

export default About;
