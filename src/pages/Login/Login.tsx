import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth, googleProvider } from "../../services/config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "@firebase/auth";

import HandlePassword from "./HandlePassword";
import Button from "../../components/Button/Button";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log(auth?.currentUser?.email);

  const passwordHandler = (passedPassword: string) =>
    setPassword(passedPassword);

  const emailHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/mypage");
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/mypage");
    } catch (error) {
      console.log(error);
    }
  };

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
            value={email}
            onChange={emailHandler}
          />
        </div>
        <HandlePassword onTypedPassword={passwordHandler} />
      </div>
      <div className="login_button">
        <Button onClick={signIn}>Sign in</Button>
      </div>
      <button className="login_with_google" onClick={signInWithGoogle}>
        <FontAwesomeIcon icon={faGoogle} />
        <p>Continue with Google</p>
      </button>
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
  gap: 1rem;
  .login_title {
    font-size: 1.4rem;
    font-weight: 700;
    padding: 1rem;
  }

  .login_form {
    width: 100%;
    padding: 1rem 0;

    .email_input {
      border-bottom: 1px solid #4d4d4d;
      border-top: 1px solid #4d4d4d;
      border-left: 1px solid #4d4d4d;
      border-right: 1px solid #4d4d4d;
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

  .login_with_google {
    width: 99%;
    padding: 0.6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #ff8c38;
    border-radius: 0.3rem;
    background-color: #fff7ed;
    color: #4d4d4d;
    p {
      font-size: 1rem;
      font-weight: 700;
    }
  }

  .login_newAccount {
    padding: 2rem;
    a {
      color: #ff8c38;
    }
  }
  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30rem;
  }
`;
export default Login;
