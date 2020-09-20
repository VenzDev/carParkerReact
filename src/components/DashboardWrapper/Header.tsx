import React, { FunctionComponent } from "react";
import styled from "styled-components";
import logo from "../../assets/logo3.svg";

const HeaderWrapper = styled.div`
  position: fixed;
  width: 80%;
  margin-left: 20%;
  padding: 0 3rem;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
  z-index: 10;

  @media (max-width: 950px) {
    margin-left: 0;
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const Flex = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.div`
  background-color: #0080ff;
  margin-left: 0.5rem;
  height: 25px;
  width: 25px;
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  color: white;
`;

const LogoImg = styled.img`
  display: none;
  width: 40px;
  height: 40px;

  @media (max-width: 950px) {
    display: block;
  }
`;

const H2 = styled.h2`
  font-weight: 200;
  margin-left: 1rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Header: FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <Flex>
        <LogoImg src={logo} alt="logo" />
        <H2>Hello, John</H2>
      </Flex>
      <Flex>
        <p>John Smith</p>
        <Arrow>
          <i className="fas fa-angle-down"></i>
        </Arrow>
      </Flex>
    </HeaderWrapper>
  );
};

export default Header;
