import "./Home.css";
import AboutMe from "../../components/AboutMe/AboutMe";
import ImageWall from "../../components/ImageWall/ImageWall";
import Contact from "../../components/Contact/Contact";
import FadeOutWrapper from "../../components/FadeOutWrapper/FadeOutWrapper";
import FadeInWrapper from "../../components/FadeInWrapper/FadeInWrapper";
import Skill from "../../components/Skill/Skill";

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
        <Skill />
      </FadeInWrapper>
      <FadeInWrapper>
        <Contact />
      </FadeInWrapper>
    </div>
  );
};

export default Home;
