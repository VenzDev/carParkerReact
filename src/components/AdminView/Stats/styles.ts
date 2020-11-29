import { styled } from "../../../styles/theme";

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  height: 300px;
  margin-bottom: 1rem;
`;

export const PieChartContainer = styled.div`
  flex: 0 0 50%;
  border-radius: 10px;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  background-color: white;
`;
export const DatesContainer = styled.div`
  flex: 0 0 30%;
  border-radius: 10px;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    margin-bottom: 1rem;
  }
`;

export const SlotsChartContainer = styled.div`
  border-radius: 10px;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  background-color: white;
  height: 400px;
  width: 90%;
  padding: 1rem;
  margin: 0 auto;
`;
