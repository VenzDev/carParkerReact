import React, { FunctionComponent } from "react";
import { styled } from "../../styles/theme";
import { StyledNavLink } from "../Reusable/Links";
import logo from "../../assets/logo3.svg";

const SidebarWrapper = styled.div`
  color: ${({ theme }) => theme.color.white};
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.blueLight};
  background-image: ${({ theme }) => theme.gradient.toBottom};

  @media (max-width: 950px) {
    display: none;
  }
`;
const Grow = styled.div`
  flex-grow: 1;
`;

const Sticky = styled.div`
  position: sticky;
  -webkit-position: sticky;
  top: 70px;
`;

const LogoText = styled.h2`
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 2px;
  font-size: 1.7rem;
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledNavLinkSidebar = styled(StyledNavLink)`
  &.active > div {
    color: ${({ theme }) => theme.color.blueDark};
    background-color: ${({ theme }) => theme.color.lightAqua};
  }
`;

const Flex = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.div`
  background-color: transparent;
  color: ${({ theme }) => theme.color.white};
  border-bottom-left-radius: 23px;
  border-top-left-radius: 23px;
  position: relative;
  margin: 1rem;
  margin-left: 30%;
  margin-right: 0;
  padding: 1rem;
  font-size: 1.3rem;
  i {
    width: 50px;
  }

  @media (max-width: 1400px) {
    font-size: 1rem;
  }

  @media (max-width: 1200px) {
    margin-left: 10%;
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
`;

const Sidebar: FunctionComponent = () => {
  return (
    <SidebarWrapper>
      <Flex>
        <LogoImg src={logo} alt="logo" />
        <LogoText>Parker</LogoText>
      </Flex>
      <Grow>
        <Sticky>
          <StyledNavLinkSidebar exact to="/dashboard">
            <NavItem>
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </NavItem>
          </StyledNavLinkSidebar>
          <StyledNavLinkSidebar exact to="/dashboard/orders">
            <NavItem>
              <i className="fas fa-shopping-cart"></i>
              <span>Orders</span>
            </NavItem>
          </StyledNavLinkSidebar>
          <StyledNavLinkSidebar exact to="/dashboard/account">
            <NavItem>
              <i className="fas fa-user"></i>
              <span>Account</span>
            </NavItem>
          </StyledNavLinkSidebar>
          <StyledNavLinkSidebar exact to="/dashboard/support">
            <NavItem>
              <i className="fas fa-question-circle"></i>
              <span>Support</span>
            </NavItem>
          </StyledNavLinkSidebar>
        </Sticky>
      </Grow>
      <Copyright>&copy; Kamil Bechta {new Date().getFullYear()}</Copyright>
    </SidebarWrapper>
  );
};

export default Sidebar;
