import React from 'react';
import ImageWall from '../../components/ImageWall/ImageWall';
import AboutMe from '../../components/AboutMe/AboutMe';
import Contact from '../../components/Contact/Contact';
import './Home.css';
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
      <Contact />

    </div>
  );
}



export default Home;
