import { GradientButton } from "../../components/Button";
import { StyledLink } from "../../components/Reusable/Links";
import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #00d3ff;
  background-image: linear-gradient(to bottom, #0080ff, #0098ff, #00aeff, #00c1ff, #00d3ff);
`;

export const opacity = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;

export const RegisterContent = styled.div`
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

export const RegisterForm = styled.div`
  flex: 0 0 50%;
  padding: 2rem;

  @media (max-width: 850px) {
    flex: 0 0 100%;
  }
`;

export const RegisterImage = styled.div`
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

export const Divider = styled.div`
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

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 23px;
  border: none;
  background-color: #f5f5f5;
  outline: none;
  text-indent: 1rem;
  margin-bottom: 1.5rem;
`;

export const InputDesc = styled.p`
  margin: 0;
  padding: 0;
  padding-left: 1rem;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const RegisterDesc = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

interface Test {
  disable: boolean;
}

export const GradientButtonCenter = styled(GradientButton)`
  margin: 2rem auto;
  display: block;
  height: 40px;
  position: relative;
  pointer-events: ${({ disable }: Test) => (disable ? "none" : "auto")};
  opacity: ${({ disable }: Test) => (disable ? "0.8" : "1")};
  @media (max-width: 500px) {
    margin: 1rem auto;
  }
`;

export const StyledLinkBlue = styled(StyledLink)`
  color: blue !important;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  margin-left: 1rem;
  color: red;
  position: absolute;
  margin-top: 3px;
  font-size: 0.8rem;
`;

export const ApiError = styled.p`
  position: absolute;
  width: calc(100% - 4rem);
  text-align: center;
  margin: 0;
  margin-top: -5px;
  color: red;
`;
