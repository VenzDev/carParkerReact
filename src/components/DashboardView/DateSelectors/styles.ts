import styled from "styled-components";

export const TimerDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 2rem;
  margin-bottom: 1rem;
  background-color: white;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  border-radius: 12px;
  flex-wrap: wrap;
`;

export const H2 = styled.h2`
  font-weight: 200;
  margin-left: 2rem;
`;

export const Order = styled.div`
  @media (max-width: 1200px) {
    order: 1;
  }
`;