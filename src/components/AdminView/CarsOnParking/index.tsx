import React, { FunctionComponent, useEffect, useState } from "react";
import { adminCarsOnParking } from "../../../api/Api";
import Spinner from "../../Reusable/Spinner";
import {
  Exchange,
  Slots,
  Slot,
  SlotSpace,
  SlotsHalf,
  SlotHorizontal,
  ParkingWrapper,
} from "./styles";

const CarsOnParking: FunctionComponent = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await adminCarsOnParking();
      setStatus(data);
      console.log(data);
      setLoading(false);
    }
    getData();
  }, []);

  const slots_1st_layer = [];
  const slots_2nd_layer = [];

  for (let i = 0; i < 8; i++) {
    slots_1st_layer.push(
      <Slot key={i} status={status[i]}>
        {i + 1}
      </Slot>
    );
    slots_2nd_layer.push(
      <Slot key={i + 15} status={status[i + 15]}>
        {i + 16}
      </Slot>
    );
  }

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
          <Slots>{slots_1st_layer}</Slots>
          <SlotSpace />
          <Slots>
            <SlotsHalf>
              <SlotHorizontal status={status[8]}>9</SlotHorizontal>
              <SlotHorizontal status={status[9]}>10</SlotHorizontal>
            </SlotsHalf>
            <SlotsHalf>
              <SlotHorizontal status={status[10]}>11</SlotHorizontal>
            </SlotsHalf>
          </Slots>
          <Slots>
            <SlotsHalf>
              <SlotHorizontal status={status[11]}>12</SlotHorizontal>
              <SlotHorizontal status={status[12]}>13</SlotHorizontal>
            </SlotsHalf>
            <SlotsHalf>
              <SlotHorizontal status={status[13]}>14</SlotHorizontal>
              <SlotHorizontal status={status[14]}>15</SlotHorizontal>
            </SlotsHalf>
          </Slots>
          <SlotSpace />
          <Slots>{slots_2nd_layer}</Slots>
        </>
      )}
    </ParkingWrapper>
  );
};

export default CarsOnParking;
