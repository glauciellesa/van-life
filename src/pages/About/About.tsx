import aboutImg from "../../img/about.jpg";
import styled from "styled-components";
import Button from "../../components/Button/Button";

const About = () => {
  return (
    <StyledAbout>
      <img src={aboutImg} alt="Van's image" />
      <div className="about_content">
        <p className="about_title">
          Don’t squeeze in a sedan when you could relax in a van.
        </p>
        <p className="about_description">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>
        <div className="about_mission">
          <p className="description">
            Your destination is waiting. Your van is ready.
          </p>
          <Button color="red">Explore our vans</Button>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.div``;
