import React, { useContext } from 'react';
import './Bio.css';
import { ThemeContext } from '../../lib/ThemeProvider';

const Bio = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="bio">
      <div className="bio-title">
        <h1>Who am I?</h1>
      </div>

      <div className="bio-container">
        <div className="work-experience">
          <h2 className={`section-title__h2 section-title__h2--${theme}`}>Work Experience</h2>
          <div className="bio-section-container">
            <div>
              <div className="bio-title-date">
                <h3>Back-end Developer</h3>
                <p className="bio-date">
                  Sep 2022 - Apr 2023
                </p>
              </div>
              <p className="bio-institute">
                25Sprout co., ltd
              </p>
              <ul className="bio-content">
                <li>Developed the official website for The General Association of Chinese Culture, incorporating tasks such as RESTful API development, content management system implementation, payment gateway integration, and third-party login integration</li>
                <li>Maintained and enhanced the membership back-end system for Audi Taiwan, ensuring seamless functionality and optimal user experience</li>
                <li>Led code reviews, fostering collaboration, ensuring high-quality code, and implemented rigorous unit testing, significantly reducing error rates and streamlining project manager checks</li>
              </ul>
            </div>
            <div>
              <div className="bio-title-date">
                <h3>Research Assistant</h3>
                <p className="bio-date">
                  Sep 2019 - Aug 2021
                </p>
              </div>
              <p className="bio-institute">
                Institute of Information Science, Academia Sinica
              </p>
              <ul className="bio-content">
                <li>Specialized in time series analysis, Fintech, and Machine Learning, with a particular emphasis on meta-learning and reinforcement learning</li>
                <li>Short-Term Stock Price-Trend Prediction Using Meta-Learning</li>
                <ul>
                  <li>Published in 2021 IEEE International Conference on Systems, Man, and Cybernetics (SMC)</li>
                  <li>Introduced an innovative labeling method, Slope-detection, to enhance the reflection of stock market volatility, and ensured that the trained model possesses higher generality</li>
                  <li>Employed meta-learning techniques to empower the model to rapidly assimilate general market trends, facilitating swift individual stock fine-tuning. Resultantly, achieved a cumulative return exceeding 1.8 times the original investment</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div className="education">
          <h2 className={`section-title__h2 section-title__h2--${theme}`}>Education</h2>
          <div className="bio-section-container">
            <div>
              <div className="bio-title-date">
                <h3>Northeaster University</h3>
                <p className="bio-date">
                  Jan 2024 - Dec 2025 (Expected)
                </p>
              </div>
              <p className="bio-institute">
                Master of Science in Computer Software Engineering
              </p>
            </div>
            <div>
              <div className="bio-title-date">
                <h3>Fu Jen Catholic University</h3>
                <p className="bio-date">
                  Sep 2017 - June 2021
                </p>
              </div>
              <p className="bio-institute">
                Bachelor of Science in Computer Science and Information Engineering
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
