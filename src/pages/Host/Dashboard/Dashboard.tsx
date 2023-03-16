import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import VansList from "../Vans/VansList";

const Dashboard = () => {
  const qntDay = 30;
  const amoutn = "2,260";
  const rate = "5.0";
  return (
    <StyledDashboard>
      <div className="dash_header">
        <h1 className="dash_title">Welcome!</h1>
        <p className="dash_report">
          Income last <span>{qntDay} days</span>
        </p>
        <p className="dash_amount">${amoutn}</p>
      </div>
      <div className="dash_review">
        <span className="dash_review_score">Review score </span>
        <span className="dash_review_star">
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span className="dash_review_rate">{rate}</span>/5
      </div>
      <div className="dash_vans">
        <p className="dash_vans_info">Your listed vans</p>
        <p className="dash_vans_view">View all</p>
      </div>
      <div className="dash_vans_list">
        <VansList />
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;

const StyledDashboard = styled.div`
  width: 100%;
  padding-top: 2rem;
  color: #161616;
  .dash_header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #ffead0;
  }

  .dash_title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .dash_report {
    color: #4d4d4d;
    font-size: 0.8rem;
    font-weight: 100;
    span {
      font-weight: 800;
      text-decoration: underline;
    }
  }

  .dash_amount {
    font-size: 2rem;
    font-weight: bolder;
  }

  .dash_review {
    padding: 2rem 1rem;
    background-color: #ffddb2;

    .dash_review_score {
      font-weight: 600;
    }

    .dash_review_star {
      padding-left: 0.5rem;
      color: #ff8c38;
    }

    .dash_review_rate {
      padding-left: 0.3rem;
      font-weight: 600;
    }
  }

  .dash_vans {
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .dash_vans_info {
      font-weight: 600;
      font-size: 1.3rem;
    }
    .dash_vans_view {
      font-weight: 100;
      font-size: 0.8rem;
    }
  }

  .dash_vans_list {
    padding: 1rem;
  }
`;
