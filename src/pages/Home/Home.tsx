import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import homeImg from "../../img/homeImg.png";

const Home = () => {
  return (
    <StyledHome>
      <p className="home_moto">
        You got the travel plans, we got the travel vans.
      </p>
      <p className="home_description">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <div className="home_button">
        <NavLink to="vans">
          <Button> Find your van </Button>
        </NavLink>
      </div>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  width: 100vw;
  height: 100%;
  color: #fff;
  padding: 2rem;
  position: relative;
  background-image: url(${homeImg});
  isolation: isolate;
  background-position: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background: #000;
    opacity: 0.4;
  }

  .home_moto {
    font-size: 2.5rem;
    font-weight: bold;
    padding-bottom: 2rem;
  }

  .home_description {
    font-size: 1.2rem;
    font-weight: normal;
    padding-bottom: 2rem;
  }

  .home_button {
    width: 100%;
    font-weight: bold;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.3rem;
    background-color: #ff8c38;

    a {
      color: #fff;
    }
  }
  @media (min-width: 600px) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .home_moto,
    .home_description {
      width: 50rem;
    }
    .home_button {
      width: 30rem;
    }
  }
`;
