import React, { FunctionComponent, useState, useEffect } from "react";
import logo from "../../assets/logo3.svg";
import { useTranslation } from "react-i18next";
import MenuButton from "./MenuButton";
import { StyledHeader, FlexDiv, LogoImg, LogoText, LoginButton, RegisterButton, LangBtn, Fill } from "./styles";
import { StyledLink } from "../Reusable/Links";
import { RouteComponentProps, withRouter } from "react-router-dom";

import SideNavbar from "./SideNavbar";

interface IHeader extends RouteComponentProps { }

const Header: FunctionComponent<IHeader> = ({ history }) => {
  const { t, i18n } = useTranslation();
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [isHomePage, setHomePage] = useState(history.location.pathname === "/home");

  const handleNavbar = () => setNavbarOpen(!isNavbarOpen);

  useEffect(() => {
    const unlisten = history.listen((location) => {
      if (location.pathname !== "/home") setHomePage(false);
      else setHomePage(true);
    });

    return () => {
      unlisten();
    };
  }, [history]);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <StyledHeader>
      <FlexDiv>
        <LogoImg src={logo} alt="logo" />
        <StyledLink to="/home">
          <LogoText active={isHomePage}>Parker</LogoText>
        </StyledLink>
        <Fill />
        <StyledLink to="/home/login">
          <LoginButton whileTap={{ scale: 0.85 }}>{t("login")}</LoginButton>
        </StyledLink>
        <StyledLink to="/home/register">
          <RegisterButton whileTap={{ scale: 0.85 }}>{t("register")}</RegisterButton>
        </StyledLink>
        <p>
          <LangBtn onClick={() => changeLanguage("en")}>EN</LangBtn>
          <span>/</span>
          <LangBtn onClick={() => changeLanguage("pl")}>PL</LangBtn>
        </p>
        <MenuButton isHomePage={isHomePage} isNavbarOpen={isNavbarOpen} handleNavbar={handleNavbar} />
      </FlexDiv>
      <SideNavbar isNavbarOpen={isNavbarOpen} handleNavbar={handleNavbar} />
    </StyledHeader>
  );
};
export default withRouter(Header);
