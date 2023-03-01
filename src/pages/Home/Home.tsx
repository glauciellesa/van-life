import styled from "styled-components";
import Button from "../../components/Button/Button";
import homeImg from "../../img/homeImg.jpg";

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
      <Button> Find your van </Button>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  background-image: url(${homeImg});
  text-align: center;
  color: #fff;
  height: 30rem;
  .home_moto {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .home_description {
    font-size: 1.5rem;
    font-weight: normal;
  }
`;
