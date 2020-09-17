import { HeaderButton } from "../Button";
import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled.header`
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 100;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem;

  > p {
    margin-right: 3rem;
    color: white;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const Fill = styled.div`
  flex-grow: 1;
`;

interface Iicons {
  active: boolean;
}

export const Icons = styled.div`
  color: ${({ active }: Iicons) => (active ? "blue" : "white")};
  margin-right: 1rem;
  display: none;
  cursor: pointer;
  z-index: 100;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const SideNavbarContainer = styled.div`
  margin: 3rem;
  margin-top: 0;
  color: blue;

  > a {
    text-decoration: none;
    font-size: 18px;
    margin-bottom: 1rem;
    line-height: 30px;
    display: block;
    font-weight: 300;
    letter-spacing: 2px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
  > p {
    > span {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const LogoNavbarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`;

interface ILogoText {
  active: boolean;
}

export const LogoText = styled.h2`
  margin-left: 0.5rem;
  color: ${({ active }: ILogoText) => (active ? "blue" : "white")};
  letter-spacing: 2px;
  font-size: 1.7rem;
`;

export const LoginButton = styled(HeaderButton)`
  color: white;
  background-color: transparent;
  border: 2px solid white;
`;

export const RegisterButton = styled(HeaderButton)`
  color: #0080ff;
  background-color: white;
`;

export const LangBtn = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Navbar = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 80%;
  height: 100%;
  box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: 0.2s;
  z-index: 2;
`;

export const NavbarWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 20%;
  height: 100%;
  transition: 0.2s;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;
