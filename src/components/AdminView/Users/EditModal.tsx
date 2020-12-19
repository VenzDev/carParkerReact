import { Switch } from "@material-ui/core";
import React, { FormEvent, FunctionComponent, useState } from "react";
import styled from "styled-components";
import { editUser } from "../../../api/Api";
import { AdminUser } from "../../../features/types";
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

const RelativeGradientButton = styled(GradientButton)`
  position: relative;
  height: 50px;
`;

interface IModal {
  closeModal: () => void;
  refreshUsers: () => void;
  user: AdminUser;
}

const EditModal: FunctionComponent<IModal> = ({
  closeModal,
  refreshUsers,
  user,
}) => {
  const [editedUser, setEditUser] = useState(user);
  const [isLoading, setLoading] = useState(false);

  const handleActive = () => {
    setEditUser({ ...editedUser, is_active: !editedUser.is_active });
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setEditUser({
      ...editedUser,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleClick = async () => {
    setLoading(true);
    await handleSubmit();
    refreshUsers();
    closeModal();
  };

  const handleSubmit = async () => {
    await editUser(editedUser);
  };

  return (
    <Content>
      <CloseButton onClick={closeModal}>
        <i className="fas fa-times" />
      </CloseButton>
      <p>Edit user</p>
      <div>
        <div>
          <p>Username</p>
          <input
            name="name"
            onChange={(e) => handleChange(e)}
            value={editedUser.name!}
          />
        </div>
        <div>
          <p>Email</p>
          <input
            name="email"
            onChange={(e) => handleChange(e)}
            value={editedUser.email!}
          />
        </div>
        <div>
          <p>Rfid card id</p>
          <input
            name="rfid_card_id"
            onChange={(e) => handleChange(e)}
            value={editedUser.rfid_card_id!}
          />
        </div>
        <div>
          <span>Account status: </span>
          <Switch
            checked={editedUser.is_active}
            color="primary"
            name="account status"
            onChange={handleActive}
          />
        </div>
        <RelativeGradientButton onClick={handleClick}>
          {!isLoading ? "Change" : <Spinner small white />}
        </RelativeGradientButton>
      </div>
    </Content>
  );
};

export default EditModal;
