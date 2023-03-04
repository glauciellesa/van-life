import aboutImg from "../../img/aboutImg.png";
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
          travel plans can go off without a hitch. <br /> (Hitch costs extra 😉)
        </p>

        <p className="about_description">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about_mission">
          <p className="mission_description">
            Your destination is waiting. <br /> Your van is ready.
          </p>
          <div className="mission_button">
            <Button color="#161616">Explore our vans</Button>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.div`
  color: #161616;
  text-align: justify;
  line-height: 1.5rem;

  img {
    width: 100%;
    object-fit: cover;
  }

  .about_content {
    padding: 0.5rem 1rem;
  }
  .about_title {
    font-weight: bold;
    font-size: 1.5rem;

    padding: 1.4rem 0;
  }
  .about_description {
    font-weight: 500;
    font-size: 0.85rem;
    line-height: 1.4rem;
    padding-top: 1.4rem;
  }
  .about_mission {
    margin: 4rem 0;
    padding: 1.5rem;
    background-color: #ffcc8d;
  }
  .mission_description {
    font-weight: bold;
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }
  .mission_button {
    padding: 0 0.5rem;
    width: 12rem;
  }
`;
