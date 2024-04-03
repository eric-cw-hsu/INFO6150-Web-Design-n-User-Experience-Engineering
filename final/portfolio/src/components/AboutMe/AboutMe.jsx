import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="about-me__h1">&gt; I'm a Software Engineer&#32;<span className="flashing">&#124;</span></h2>
      <p className="about-me__p">
        I'm currently a grad student in Computer Software Engineering at Northeastern University. I'm passionate about software development and I'm always looking for new opportunities to learn and grow. I'm interested in web development, large scale systems, distributed systems, and cloud computing.
      </p>
    </div>
  );
}

export default AboutMe;
