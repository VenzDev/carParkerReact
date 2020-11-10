import { styled } from "../../../styles/theme";
import { GradientButton } from "../../Button";

export const LoadingWrapper = styled.div`
  padding: 3rem;
`;

export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 2rem;
  transform: translate(-50%, -50%);
  width: 650px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ReserveButton = styled.button`
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.blueLight};
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

export const P = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const Span = styled.span`
  margin-right: 1rem;
`;

export const Button = styled(GradientButton)`
  display: inline-block;
  padding: 0.5rem 1rem;
`;

export const ReservationContent = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid lightgray;
  &:last-child {
    border-bottom: none;
  }
`;
