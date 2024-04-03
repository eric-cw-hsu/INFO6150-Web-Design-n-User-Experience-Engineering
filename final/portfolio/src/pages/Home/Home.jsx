import React from 'react';
import './Home.css';
import profileImg from '../../assets/profile.svg';
import AboutMe from '../../components/AboutMe/AboutMe';
import ImageWall from '../../components/ImageWall/ImageWall';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import Contact from '../Contact/Contact';
import FadeOutWrapper from '../../components/FadeOutWrapper/FadeOutWrapper';
import FadeInWrapper from '../../components/FadeInWrapper/FadeInWrapper';

const Home = () => {
  return (
    <div className="home">

      <FadeOutWrapper>
        <ImageWall />
      </FadeOutWrapper>
      <FadeInWrapper>
        <AboutMe />
      </FadeInWrapper>
      <FadeInWrapper>
        <WorkExperience />
      </FadeInWrapper>
      <FadeInWrapper>
        <Contact />
      </FadeInWrapper>
    </div>
  );
}

export default Home;
