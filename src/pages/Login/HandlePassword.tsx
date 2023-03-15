// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";

interface HandlePasswordProps {
  onTypedPassword: (passedPassword: string) => void;
}

const HandlePassword = (props: HandlePasswordProps) => {
  const [values, setValues] = useState({ password: "", showPassword: false });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handlePasswordChange =
    (prop: string) => (event: { target: { value: any } }) => {
      setValues({ ...values, [prop]: event.target.value });
      props.onTypedPassword(values.password);
    };

  const visibility = <FontAwesomeIcon icon={faEye} />;
  const visibilityOff = <FontAwesomeIcon icon={faEyeSlash} />;

  return (
    <StyledHandlePassWord>
      <label htmlFor="password" />
      <input
        className="inputField"
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        id="password"
        placeholder="Password"
      />
      <button onClick={handleClickShowPassword}>
        {values.showPassword ? visibility : visibilityOff}
      </button>
    </StyledHandlePassWord>
  );
};

const StyledHandlePassWord = styled.div`
  display: flex;
  border: 1px solid #4d4d4d;
  padding-right: 0.5rem;
  background-color: #fff;

  .inputField {
    flex: 1;
    border: none;
    border-radius: 0;
    padding: 0.4rem;
    width: 100%;
    margin: 0%;
  }
  button {
    border: none;
    background-color: #fff;
  }
`;

export default HandlePassword;
