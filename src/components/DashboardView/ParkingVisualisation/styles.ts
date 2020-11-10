import styled from "styled-components";

export const ParkingWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 2rem;
  background-color: white;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  position: relative;

  @media (max-width: 1100px) {
    width: 600px;
  }

  @media (max-width: 950px) {
    width: 700px;
  }

  @media (max-width: 800px) {
    width: 600px;
  }

  @media (max-width: 700px) {
    width: 500px;
  }

  @media (max-width: 600px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 380px;
  }

  @media (max-width: 400px) {
    width: 340px;
  }
`;
export const Slots = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

interface ISlot {
  status: string;
}

export const Slot = styled.div`
  flex: 0 0 75px;
  height: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: 0.3s;

  background-color: ${({ status }: ISlot) => {
    if (status === "FREE") return "#1eff00";
    else if (status === "RESERVED") return "#ffc800";
  }};

  box-shadow: ${({ status }: ISlot) => {
    if (status === "FREE") return "2px 6px 12px rgba(30, 255, 0, 0.3)";
    else if (status === "RESERVED") return "2px 6px 12px rgba(255, 200, 0, 0.3)";
  }};

  cursor: pointer;

  &:hover {
    box-shadow: ${({ status }: ISlot) => {
      if (status === "FREE") return "2px 6px 12px rgba(30, 255, 0, 0.9)";
      else if (status === "RESERVED") return "2px 6px 12px rgba(255, 200, 0, 0.9)";
    }};
  }

  @media (max-width: 1100px) {
    flex: 0 0 50px;
  }

  @media (max-width: 600px) {
    height: 60px;
    flex: 0 0 40px;
    border-radius: 6px;
  }

  @media (max-width: 500px) {
    height: 50px;
    flex: 0 0 30px;
  }
`;

export const SlotSpace = styled.div`
  height: 75px;

  @media (max-width: 1100px) {
    height: 50px;
  }

  @media (max-width: 600px) {
    height: 25px;
  }

  @media (max-width: 400px) {
    height: 20px;
  }
`;
export const SlotsHalf = styled.div`
  flex: 0 0 49%;
  justify-content: space-between;
  display: flex;
`;

export const SlotHorizontal = styled.div`
  flex: 0 0 100px;
  height: 75px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: 0.3s;

  background-color: ${({ status }: ISlot) => {
    if (status === "FREE") return "#1eff00";
    else if (status === "RESERVED") return "#ffc800";
  }};

  box-shadow: ${({ status }: ISlot) => {
    if (status === "FREE") return "2px 6px 12px rgba(30, 255, 0, 0.3)";
    else if (status === "RESERVED") return "2px 6px 12px rgba(255, 200, 0, 0.3)";
  }};

  cursor: ${({ status }: ISlot) => (status === "FREE" ? "pointer" : "inherit")};

  &:hover {
    box-shadow: ${({ status }: ISlot) => {
      if (status === "FREE") return "2px 6px 12px rgba(30, 255, 0, 0.9)";
    }};
  }

  @media (max-width: 1100px) {
    flex: 0 0 75px;
    height: 50px;
  }

  @media (max-width: 600px) {
    flex: 0 0 60px;
    height: 40px;
    border-radius: 6px;
  }

  @media (max-width: 400px) {
    flex: 0 0 50px;
    height: 30px;
  }
`;

export const Exchange = styled.div`
  position: absolute;
  right: 20px;
  top: 180px;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    top: 110px;
  }

  @media (max-width: 400px) {
    top: 100px;
  }
`;
