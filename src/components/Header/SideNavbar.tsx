import React, { FunctionComponent } from "react";
import logo from "../../assets/logo2.svg";
import {
  NavbarWrapper,
  Navbar,
  LogoImg,
  LogoText,
  SideNavbarContainer,
  LogoNavbarContainer,
} from "./styles";
import { StyledNavLink } from "../Reusable/Links";
import { useTranslation } from "react-i18next";

export interface ISideNavbar {
  isNavbarOpen: boolean;
  handleNavbar: () => void;
}

const SideNavbar: FunctionComponent<ISideNavbar> = ({ isNavbarOpen, handleNavbar }) => {
  const { t, i18n } = useTranslation();

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const navVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <NavbarWrapper
        initial={false}
        animate={isNavbarOpen ? "open" : "closed"}
        transition={{ duration: 0.5, times: [0, 0.5], ease: "easeInOut", delay: 0 }}
        variants={variants}
        onClick={handleNavbar}
      ></NavbarWrapper>
      <Navbar
        initial={false}
        animate={isNavbarOpen ? "open" : "closed"}
        transition={{ duration: 0.5, times: [0.2, 0.3], ease: "easeInOut", delay: 0 }}
        variants={navVariants}
      >
        <SideNavbarContainer>
          <LogoNavbarContainer>
            <LogoImg src={logo} alt="logo" />
            <LogoText active={true}>Parker</LogoText>
          </LogoNavbarContainer>
          <StyledNavLink exact onClick={handleNavbar} to="/home">
            {t("home")}
          </StyledNavLink>
          <StyledNavLink exact onClick={handleNavbar} to="/home/login">
            {t("login")}
          </StyledNavLink>
          <StyledNavLink exact onClick={handleNavbar} to="/home/register">
            {t("register")}
          </StyledNavLink>
          <p>
            <span
              onClick={() => {
                changeLanguage("en");
                handleNavbar();
              }}
            >
              EN
            </span>
            /
            <span
              onClick={() => {
                changeLanguage("pl");
                handleNavbar();
              }}
            >
              PL
            </span>
          </p>
        </SideNavbarContainer>
      </Navbar>
    </div>
  );
};

export default SideNavbar;
