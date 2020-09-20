import React, { FunctionComponent } from "react";
import { styled } from "../../styles/theme";
import { NavLink } from "react-router-dom";

const FooterWrapper = styled.footer`
  display: none;
  position: fixed;
  bottom: 0;
  height: 50px;

  width: 100%;
  background-color: ${({ theme }) => theme.color.blueDark};

  @media (max-width: 950px) {
    display: block;
    display: flex;
  }
`;

const Icon = styled(NavLink)`
  flex: 0 0 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  text-decoration: none;

  &.active > div {
    display: block;
  }
`;

const Active = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  width: 100%;
  height: 7px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  top: 0;
`;

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      <Icon exact to="/dashboard">
        <Active />
        <i className="fas fa-home"></i>
      </Icon>

      <Icon exact to="/dashboard/orders">
        <Active />
        <i className="fas fa-shopping-cart"></i>
      </Icon>
      <Icon exact to="/dashboard/account">
        <Active />
        <i className="fas fa-user"></i>
      </Icon>
      <Icon exact to="/dashboard/support">
        <Active />
        <i className="fas fa-question-circle"></i>
      </Icon>
    </FooterWrapper>
  );
};

export default Footer;
