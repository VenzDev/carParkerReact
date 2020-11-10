import React, { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { auth, cancelReservation } from "../../../api/Api";
import { login } from "../../../features/User/slice";
import { GradientButton } from "../../Button";
import Spinner from "../../Reusable/Spinner";
const Content = styled.div`
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

const CloseButton = styled.div`
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

const SubmitButton = styled(GradientButton)`
  position: relative;
  height: 50px;
`;

interface IModal {
  closeModal: () => void;
  reservation_id: string;
  reload: () => void;
}

const ModalCancel: FunctionComponent<IModal> = ({ closeModal, reservation_id, reload }) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleCancel = () => {
    cancelReservation(reservation_id).then(async () => {
      const user = await auth();
      await reload();
      dispatch(
        login({
          name: user.data.name,
          user_id: user.data.id,
          active_reservations: user.data.reservations.length,
          cars_on_parking: user.data.cars_on_parking,
        })
      );
      closeModal();
    });
  };
  return (
    <Content>
      <CloseButton onClick={closeModal}>
        <i className="fas fa-times"></i>
      </CloseButton>
      <p>Confirm cancel reservation {reservation_id}</p>
      <SubmitButton
        onClick={() => {
          setLoading(true);
          handleCancel();
        }}
      >
        {isLoading ? <Spinner small white /> : "Cancel"}
      </SubmitButton>
    </Content>
  );
};

export default ModalCancel;
