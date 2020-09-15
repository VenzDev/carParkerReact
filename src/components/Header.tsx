import React, { FunctionComponent } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

const StyledHeader = styled.header`
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 100;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem;

  div {
    flex-grow: 1;
  }

  button {
    margin-right: 6rem;
  }

  > p {
    margin-right: 3rem;
    color: white;
  }
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`;

const LogoText = styled.h2`
  margin-left: 0.5rem;
  color: #006fff;
  letter-spacing: 2px;
  font-size: 1.7rem;
`;

const LoginButton = styled.button`
  width: 180px;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 36px;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  box-shadow: 0px 6px 12px rgba(255, 255, 255, 0.3);
  transition: 0.3s;
  cursor: pointer;
  outline: none;

  &:hover {
    box-shadow: 0px 6px 12px rgba(255, 255, 255, 0.7);
  }
`;

const RegisterButton = styled.button`
  width: 180px;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 36px;
  color: #0080ff;
  background-color: white;
  box-shadow: 0px 6px 12px rgba(255, 255, 255, 0.3);
  transition: 0.3s;
  cursor: pointer;
  outline: none;

  &:hover {
    box-shadow: 0px 6px 12px rgba(255, 255, 255, 0.7);
  }
`;

const LocalBtn = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Header: FunctionComponent = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <StyledHeader>
      <FlexDiv>
        <LogoImg src={logo} alt="logo" />
        <LogoText>Parker</LogoText>
        <div></div>
        <LoginButton>{t("login")}</LoginButton>
        <RegisterButton>{t("register")}</RegisterButton>
        <p>
          <LocalBtn onClick={() => changeLanguage("en")}>EN</LocalBtn>
          <span>/</span>
          <LocalBtn onClick={() => changeLanguage("pl")}>PL</LocalBtn>
        </p>
      </FlexDiv>
    </StyledHeader>
  );
};
export default Header;
