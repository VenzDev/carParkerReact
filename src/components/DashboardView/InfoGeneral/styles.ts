import { styled } from "../../../styles/theme";

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Info = styled.div`
  flex: 0 0 23%;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  background-color: white;
  border-radius: 12px;
  display: flex;
  height: 150px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1600px) {
    padding: 0.5rem;
  }

  @media (max-width: 1400px) {
    padding: 1rem;
  }

  @media (max-width: 1100px) {
    flex: 0 0 49%;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 500px) {
    height: 100px;
  }
`;

export const InfoContent = styled.div`
  flex: 0 0 60%;

  @media (max-width: 500px) {
    > h2 {
      font-size: 1rem;
    }
    > p {
      font-size: 0.8rem;
    }
  }
`;

export const InfoIcon = styled.div`
  flex: 0 0 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
  font-size: 1.5rem;
  height: 75px;
  background-color: rgba(0, 128, 255, 0.3);
  border-radius: 50%;

  @media (max-width: 500px) {
    flex: 0 0 50px;
    height: 50px;
    font-size: 1rem;
  }
`;
