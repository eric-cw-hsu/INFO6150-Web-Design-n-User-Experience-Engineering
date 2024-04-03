import React from 'react';
import './Home.css';
import profileImg from '../../assets/profile.svg';
import AboutMe from '../../components/AboutMe/AboutMe';
import ImageWall from '../../components/ImageWall/ImageWall';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div className="home">
      <ImageWall />
      <AboutMe />
      <WorkExperience />
      <Contact />
    </div>
  );
}

export default Home;
