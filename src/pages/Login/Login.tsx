import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import HandlePassword from "./HandlePassword";

const Login = () => {
  return (
    <StyledLogin>
      <div className="login_title">Sign in to your account</div>
      <div className="login_form">
        <div>
          <label htmlFor="email" />
          <input
            className="email_input"
            type="string"
            id="email"
            placeholder="Email address"
          />
        </div>
        <HandlePassword />
      </div>
      <div className="login_button">
        <Button>Sign in</Button>
      </div>
      <div className="login_newAccount">
        Don’t have an account? <Link to="newAccount">Create one now</Link>
      </div>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .login_title {
    font-size: 1.4rem;
    font-weight: 700;
    padding: 1rem;
  }

  .login_form {
    width: 100%;
    padding: 1rem 0;
    .email_input {
      border: 1px solid #4d4d4d;
      border-radius: 0;
      padding: 0.4rem;
      width: 100%;
      margin: 0%;
    }
  }

  .login_button {
    font-weight: 600;
    padding: 0.4rem;
    width: 100%;
    border-radius: 0.3rem;
    color: #fff;
    background-color: #ff8c38;
    display: flex;
    justify-content: center;
  }

  .login_newAccount {
    padding: 2rem;
    a {
      color: #ff8c38;
    }
  }
`;
export default Login;
