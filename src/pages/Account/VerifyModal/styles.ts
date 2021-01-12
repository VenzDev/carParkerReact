import { GradientButton } from "../../../components/Button";
import { styled } from "../../../styles/theme";

export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 2rem;
  transform: translate(-50%, -50%);
  width: 350px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.blueLight};
  color: white;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color.blueDark};
  }
`;

export const SubmitButton = styled(GradientButton)`
  position: relative;
  margin-top: 1rem;
  height: 40px;
`;

export const ErrorMessage = styled.p`
  color: red;
`;
