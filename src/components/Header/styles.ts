import { HeaderButton } from "../Button";
import { styled } from "../../styles/theme";
import { motion } from "framer-motion";

interface Active {
  active: boolean;
}

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

export const Icons = styled.div<Active>`
  color: ${({ active, theme }) => (active ? theme.color.blueDark : theme.color.white)};
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
  color: ${({ theme }) => theme.color.blueDark};

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

export const LogoText = styled.h2<Active>`
  margin-left: 0.5rem;
  color: ${({ active, theme }) => (active ? theme.color.blueDark : theme.color.white)};
  letter-spacing: 2px;
  font-size: 1.7rem;
`;

export const LoginButton = styled(HeaderButton)`
  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  border: 2px solid white;
`;

export const RegisterButton = styled(HeaderButton)`
  color: ${({ theme }) => theme.color.blueDark};
  background-color: ${({ theme }) => theme.color.white};
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
  background-color: ${({ theme }) => theme.color.white};
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
