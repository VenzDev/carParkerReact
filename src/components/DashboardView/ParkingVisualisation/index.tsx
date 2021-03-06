import React, { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import { selectReservations } from "../../../features/Reservations/slice";
import Spinner from "../../Reusable/Spinner";
import { Backdrop, Fade, Modal } from "@material-ui/core";
import ModalContent from "../ModalContent";
import {
  ParkingWrapper,
  Exchange,
  Slot,
  Slots,
  SlotSpace,
  SlotHorizontal,
  SlotsHalf,
  Overflow,
} from "./styles";
import ModalOrangeContent from "../ModalOrangeContent";
import { selectUser } from "../../../features/User/slice";

const ParkingVisualisation: FunctionComponent = () => {
  const { reservations, loading } = useSelector(selectReservations);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isOrangeModalOpen, setOrangeModal] = useState(false);
  const [selectedParkingSlot, setSelectedParkingSlot] = useState<number | null>(
    null
  );
  const user = useSelector(selectUser);

  const getStatus = (slot_id: number) => {
    if (reservations) return reservations[slot_id];
    return "BUSY";
  };

  const handleModal = (parkingId: number) => {
    setSelectedParkingSlot(parkingId);
    const status = getStatus(parkingId - 1);
    if (status === ("AVAILABLE_RESERVATION" || "BUSY")) setOrangeModal(true);
    else if (status === "FREE") setModalOpen(true);
  };

  return (
    <ParkingWrapper>
      {loading ? (
        <div style={{ height: "500px" }}>
          <Spinner />
        </div>
      ) : (
        <>
          {!user.is_active && <Overflow />}
          <Modal
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
            closeAfterTransition
            open={isModalOpen}
            onClose={() => setModalOpen(false)}
          >
            <Fade in={isModalOpen}>
              <ModalContent
                closeModal={() => setModalOpen(false)}
                parkingId={selectedParkingSlot}
              />
            </Fade>
          </Modal>

          <Modal
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
            closeAfterTransition
            open={isOrangeModalOpen}
            onClose={() => setOrangeModal(false)}
          >
            <Fade in={isOrangeModalOpen}>
              <ModalOrangeContent
                closeModal={() => setOrangeModal(false)}
                parkingId={selectedParkingSlot}
              />
            </Fade>
          </Modal>
          <Exchange>
            <i className="fas fa-exchange-alt"></i>
          </Exchange>
          <Slots>
            <Slot status={getStatus(0)} onClick={() => handleModal(1)}>
              1
            </Slot>
            <Slot status={getStatus(1)} onClick={() => handleModal(2)}>
              2
            </Slot>
            <Slot status={getStatus(2)} onClick={() => handleModal(3)}>
              3
            </Slot>
            <Slot status={getStatus(3)} onClick={() => handleModal(4)}>
              4
            </Slot>
            <Slot status={getStatus(4)} onClick={() => handleModal(5)}>
              5
            </Slot>
            <Slot status={getStatus(5)} onClick={() => handleModal(6)}>
              6
            </Slot>
            <Slot status={getStatus(6)} onClick={() => handleModal(7)}>
              7
            </Slot>
            <Slot status={getStatus(7)} onClick={() => handleModal(8)}>
              8
            </Slot>
          </Slots>
          <SlotSpace />
          <Slots>
            <SlotsHalf>
              <SlotHorizontal
                status={getStatus(8)}
                onClick={() => handleModal(9)}
              >
                9
              </SlotHorizontal>
              <SlotHorizontal
                status={getStatus(9)}
                onClick={() => handleModal(10)}
              >
                10
              </SlotHorizontal>
            </SlotsHalf>
            <SlotsHalf>
              <SlotHorizontal
                status={getStatus(10)}
                onClick={() => handleModal(11)}
              >
                11
              </SlotHorizontal>
            </SlotsHalf>
          </Slots>
          <Slots>
            <SlotsHalf>
              <SlotHorizontal
                status={getStatus(11)}
                onClick={() => handleModal(12)}
              >
                12
              </SlotHorizontal>
              <SlotHorizontal
                status={getStatus(12)}
                onClick={() => handleModal(13)}
              >
                13
              </SlotHorizontal>
            </SlotsHalf>
            <SlotsHalf>
              <SlotHorizontal
                status={getStatus(13)}
                onClick={() => handleModal(14)}
              >
                14
              </SlotHorizontal>
              <SlotHorizontal
                status={getStatus(14)}
                onClick={() => handleModal(15)}
              >
                15
              </SlotHorizontal>
            </SlotsHalf>
          </Slots>
          <SlotSpace />
          <Slots>
            <Slot status={getStatus(15)} onClick={() => handleModal(16)}>
              16
            </Slot>
            <Slot status={getStatus(16)} onClick={() => handleModal(17)}>
              17
            </Slot>
            <Slot status={getStatus(17)} onClick={() => handleModal(18)}>
              18
            </Slot>
            <Slot status={getStatus(18)} onClick={() => handleModal(19)}>
              19
            </Slot>
            <Slot status={getStatus(19)} onClick={() => handleModal(20)}>
              20
            </Slot>
            <Slot status={getStatus(20)} onClick={() => handleModal(21)}>
              21
            </Slot>
            <Slot status={getStatus(21)} onClick={() => handleModal(22)}>
              22
            </Slot>
            <Slot status={getStatus(22)} onClick={() => handleModal(23)}>
              23
            </Slot>
          </Slots>
        </>
      )}
    </ParkingWrapper>
  );
};

export default ParkingVisualisation;
