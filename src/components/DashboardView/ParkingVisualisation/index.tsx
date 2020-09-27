import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectReservations } from "../../../features/Reservations/slice";
import { reserveSlot } from "../../../api/Api";
import { selectUser } from "../../../features/User/slice";
import { Reservation, User } from "../../../features/types";
import Spinner from "../../Reusable/Spinner";

const ParkingWrapper = styled.div`
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
const Slots = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

interface ISlot {
  status: string;
}

const Slot = styled.div`
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

  cursor: ${({ status }: ISlot) => (status === "FREE" ? "pointer" : "inherit")};

  &:hover {
    box-shadow: ${({ status }: ISlot) => {
      if (status === "FREE") return "2px 6px 12px rgba(30, 255, 0, 0.9)";
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

const SlotSpace = styled.div`
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
const SlotsHalf = styled.div`
  flex: 0 0 49%;
  justify-content: space-between;
  display: flex;
`;

const SlotHorizontal = styled.div`
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

const Exchange = styled.div`
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

const ParkingVisualisation: FunctionComponent = () => {
  const { reservations, loading } = useSelector(selectReservations);
  const [reservedArray, setReservedArray] = useState<Array<string>>([]);
  const user: User = useSelector(selectUser);

  useEffect(() => {
    if (reservations && reservations.length !== 0) {
      let pomArray: Array<string> = [];
      reservations.forEach((r) => {
        pomArray.push(r.id);
      });
      setReservedArray(pomArray);
    }
  }, [reservations]);

  const getStatus = (slot_id: string) => {
    const findedReservation = reservations?.find((r) => r.parking_slot_id === slot_id);
    if (findedReservation) return findedReservation.status;
    return "FREE";
  };

  const handleReserve = async (slot_id: string) => {
    const status = getStatus(slot_id);
    if (status === "FREE") console.log("można rezerwować");
  };

  return (
    <ParkingWrapper>
      {loading ? (
        <div style={{ height: "500px" }}>
          <Spinner />
        </div>
      ) : (
        <>
          <Exchange>
            <i className="fas fa-exchange-alt"></i>
          </Exchange>
          <Slots>
            <Slot status={getStatus("1")} onClick={() => handleReserve("1")}>
              1
            </Slot>
            <Slot status={getStatus("2")}>2</Slot>
            <Slot status={getStatus("3")}>3</Slot>
            <Slot status={getStatus("4")}>4</Slot>
            <Slot status={getStatus("5")}>5</Slot>
            <Slot status={getStatus("6")}>6</Slot>
            <Slot status={getStatus("7")}>7</Slot>
            <Slot status={getStatus("8")}>8</Slot>
          </Slots>
          <SlotSpace />
          <Slots>
            <SlotsHalf>
              <SlotHorizontal status={getStatus("9")}>9</SlotHorizontal>
              <SlotHorizontal status={getStatus("10")}>10</SlotHorizontal>
            </SlotsHalf>
            <SlotsHalf>
              <SlotHorizontal status={getStatus("11")}>11</SlotHorizontal>
            </SlotsHalf>
          </Slots>
          <Slots>
            <SlotsHalf>
              <SlotHorizontal status={getStatus("12")}>12</SlotHorizontal>
              <SlotHorizontal status={getStatus("13")}>13</SlotHorizontal>
            </SlotsHalf>
            <SlotsHalf>
              <SlotHorizontal status={getStatus("14")}>14</SlotHorizontal>
              <SlotHorizontal status={getStatus("15")}>15</SlotHorizontal>
            </SlotsHalf>
          </Slots>
          <SlotSpace />
          <Slots>
            <Slot status={getStatus("16")}>16</Slot>
            <Slot status={getStatus("17")}>17</Slot>
            <Slot status={getStatus("18")}>18</Slot>
            <Slot status={getStatus("19")}>19</Slot>
            <Slot status={getStatus("20")}>20</Slot>
            <Slot status={getStatus("21")}>21</Slot>
            <Slot status={getStatus("22")}>22</Slot>
            <Slot status={getStatus("23")}>23</Slot>
          </Slots>
        </>
      )}
    </ParkingWrapper>
  );
};

export default ParkingVisualisation;
