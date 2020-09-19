import React, { FunctionComponent } from "react";
import styled from "styled-components";

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

const Header: FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <h2 style={{ fontWeight: 200 }}>Hello, John</h2>
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
