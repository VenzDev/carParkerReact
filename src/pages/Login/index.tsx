import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { StyledLink } from "../../components/Reusable/Links";
import { GradientButton } from "../../components/Button";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #00d3ff;
  background-image: linear-gradient(to bottom, #0080ff, #0098ff, #00aeff, #00c1ff, #00d3ff);
`;

const LoginContent = styled.div`
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  border-radius: 23px;
  background-color: white;
  padding: 2rem;

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 650px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const LoginrDesc = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 23px;
  border: none;
  background-color: #f5f5f5;
  outline: none;
  text-indent: 1rem;
  margin-bottom: 1.5rem;
`;

const InputDesc = styled.p`
  margin: 0;
  padding: 0;
  padding-left: 1rem;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const StyledLinkBlue = styled(StyledLink)`
  color: blue !important;
`;

const GradientButtonCenter = styled(GradientButton)`
  margin: 2rem auto;
  display: block;
`;

const Login: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <LoginContent>
        <LoginrDesc>
          <h2>{t("loginPage.login")}</h2>
          <p>
            {t("loginPage.notHave")} <StyledLinkBlue to="/register">{t("loginPage.register")}</StyledLinkBlue>
          </p>
        </LoginrDesc>
        <form action="">
          <div>
            <InputDesc>{t("loginPage.email")}</InputDesc>
            <Input placeholder={t("loginPage.emailExample")} type="email" />
          </div>
          <div>
            <InputDesc>{t("loginPage.password")}</InputDesc>
            <Input placeholder={t("loginPage.passwordExample")} type="password" />
          </div>
          <div>
            <GradientButtonCenter>{t("loginPage.login")}</GradientButtonCenter>
          </div>
        </form>
      </LoginContent>
    </Wrapper>
  );
};

export default Login;
