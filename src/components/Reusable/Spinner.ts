import styled, { keyframes } from "styled-components";

interface Spinner {
  white?: boolean;
  small?: boolean;
}

const spin = keyframes`
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
`;

export default styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  height: ${({ small }) => (small ? "25px" : "50px")};
  width: ${({ small }) => (small ? "25px" : "50px")};
  margin: ${({ small }) => (small ? "-12.5px 0 0 -12.5px" : "-25px 0 0 -25px")};
  border: 4px rgba(0, 0, 0, 0.25) solid;
  border-top: ${({ white }: Spinner) => (white ? `4px solid white` : "4px solid black")};
  border-radius: 50%;
  -webkit-animation: ${spin} 1s infinite linear;
  animation: ${spin} 1s infinite linear;
`;
