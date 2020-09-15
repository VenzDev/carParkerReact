import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Header from "./Header";

const WrapperDiv = styled.div`
  height: 100vh;
  width: 100%;
`;

const Wrapper: FunctionComponent = ({ children }) => {
  return (
    <WrapperDiv>
      <Header />
      {children}
    </WrapperDiv>
  );
};

export default Wrapper;
