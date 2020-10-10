import { styled } from "../../../styles/theme";
import { GradientButton } from "../../Button";

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

export const SuccessIcon = styled.div`
  font-size: 4rem;
  color: ${({ theme }) => theme.color.blueLight};
`;

export const RelativeGradientButton = styled(GradientButton)`
  position: relative;
  min-width: 150px;
  width: auto;
  height: 50px;
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
