import styled from "styled-components";
import Button from "../../components/Button/Button";
import homeImg from "../../img/homeImg.jpg";

const Home = () => {
  return (
    <StyledHome>
      <div className="home_content">
        <p className="home_moto">
          You got the travel plans, we got the travel vans.
        </p>
        <p className="home_description">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Button> Find your van </Button>
      </div>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  width: 100%;
  height: 30rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  isolation: isolate;
  background-image: url(${homeImg});
  background-size: cover;
  background-position: center;
  background-position: 0px -1000px;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background: #000;
    opacity: 0.4;
  }
  @media (max-width: 500px) {
    height: 100%;
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
`;
