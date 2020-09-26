import { styled } from "../../styles/theme";
import { StyledLink } from "../../components/Reusable/Links";
import { GradientButton } from "../../components/Button";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #00d3ff;
  background-image: linear-gradient(to bottom, #0080ff, #0098ff, #00aeff, #00c1ff, #00d3ff);
`;

export const LoginContent = styled.div`
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

export const LoginrDesc = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

interface Input {
  error: boolean;
}

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 23px;
  border: none;
  background-color: ${({ error }: Input) => (error ? "#ffebeb" : "#f5f5f5")};
  border: ${({ error }: Input) => (error ? "1px solid red" : "none")};
  outline: none;
  text-indent: 1rem;
`;
export const ErrorMessage = styled.p`
  margin: 0;
  margin-left: 1rem;
  color: red;
  position: absolute;
  margin-top: 3px;
  font-size: 0.8rem;
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

export const StyledLinkBlue = styled(StyledLink)`
  color: blue !important;
`;

interface Test {
  disable: boolean;
}

export const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

export const GradientButtonCenter = styled(GradientButton)`
  margin: 3rem auto;
  height: 40px;
  display: block;
  pointer-events: ${({ disable }: Test) => (disable ? "none" : "auto")};
  position: relative;
  opacity: ${({ disable }: Test) => (disable ? "0.8" : "1")};
`;

export const ApiError = styled.p`
  position: absolute;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-top: -5px;
  color: red;
`;
