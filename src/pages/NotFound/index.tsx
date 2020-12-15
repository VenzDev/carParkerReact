import React, { FunctionComponent } from "react";
import styled from "styled-components";
import notfound from "../../assets/notfound.svg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #00d3ff;
  background-image: linear-gradient(to bottom, #0080ff, #0098ff, #00aeff, #00c1ff, #00d3ff);
  display:flex;
  align-items:center;
  justify-content:center;

  > p {
      color:white;
      font-size:8rem;
  }
`;


const NotFound: FunctionComponent = () => {
    return (<Wrapper>
        <img src={notfound} alt="not found" />
    </Wrapper>)
}

export default NotFound;