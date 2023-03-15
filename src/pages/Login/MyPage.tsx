import { auth } from "../../services/config";
import { signOut } from "@firebase/auth";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <StyledMyPage>
      <p>Essa é minha página pessoal</p>
      <button className="logout" onClick={logout}>
        Logout
      </button>
    </StyledMyPage>
  );
};

const StyledMyPage = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .logout {
    width: fit-content;
    padding: 0.6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #ff8c38;
    border-radius: 0.3rem;
    background-color: #ff8c38;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
  }
`;
export default MyPage;
