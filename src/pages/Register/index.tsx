import React, { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";
import registerImg from "../../assets/registerImg.svg";
import { GradientButton } from "../../components/Button";
import { StyledLink } from "../../components/Reusable/Links";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #00d3ff;
  background-image: linear-gradient(to bottom, #0080ff, #0098ff, #00aeff, #00c1ff, #00d3ff);
`;

const opacity = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;

const RegisterContent = styled.div`
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  border-radius: 23px;
  background-color: white;
  display: flex;

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    top: 55%;
  }
`;

const RegisterForm = styled.div`
  flex: 0 0 50%;
  padding: 2rem;

  @media (max-width: 850px) {
    flex: 0 0 100%;
  }
`;

const RegisterImage = styled.div`
  flex: 0 0 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    display: none;
  }

  > img {
    width: 90%;
    animation: ${opacity} 0.2s ease-out;
  }
`;

const Divider = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 1px;
  background-color: lightgray;

  @media (max-width: 850px) {
    display: none;
  }
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

const RegisterDesc = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const GradientButtonCenter = styled(GradientButton)`
  margin: 2rem auto;
  display: block;

  @media (max-width: 500px) {
    margin: 1rem auto;
  }
`;

const StyledLinkBlue = styled(StyledLink)`
  color: blue !important;
`;

const Register: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <RegisterContent>
        <RegisterForm>
          <RegisterDesc>
            <h2>{t("registerPage.createAccount")}</h2>
            <p>
              {t("registerPage.alreadyHave")} <StyledLinkBlue to="/login">{t("registerPage.login")}</StyledLinkBlue>
            </p>
          </RegisterDesc>
          <form action="">
            <div>
              <InputDesc>{t("registerPage.fullName")}</InputDesc>
              <Input type="text" placeholder={t("registerPage.fullNameExample")} />
            </div>
            <div>
              <InputDesc>{t("registerPage.email")}</InputDesc>
              <Input type="email" placeholder={t("registerPage.emailExample")} />
            </div>
            <div>
              <InputDesc>{t("registerPage.password")}</InputDesc>
              <Input type="password" placeholder={t("registerPage.passwordExample")} />
            </div>
            <div>
              <InputDesc>{t("registerPage.confirmPassword")}</InputDesc>
              <Input type="text" placeholder={t("registerPage.confirmPasswordExample")} />
            </div>
            <div>
              <GradientButtonCenter>{t("registerPage.createAccount")}</GradientButtonCenter>
            </div>
          </form>
        </RegisterForm>
        <Divider />
        <RegisterImage>
          <img src={registerImg} alt="registerImage" />
        </RegisterImage>
      </RegisterContent>
    </Wrapper>
  );
};

export default Register;
