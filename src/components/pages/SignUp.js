import React from "react";
import styled from "styled-components";

import "../../App.css";

const StyledSignup = styled.div`
  background-image: url("/images/signup.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 100px;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignUp = () => {
  return <StyledSignup>SignUp</StyledSignup>;
};

export default SignUp;
