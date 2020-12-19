import { Backdrop, Fade, Modal } from "@material-ui/core";
import React, { FunctionComponent, useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../../api/Api";
import { AdminUser } from "../../../features/types";
import EditModal from "./EditModal";
import { UserWrapper } from "./styles";

const Users: FunctionComponent = () => {
  const [users, setUsers] = useState<Array<AdminUser> | null>(null);
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const getData = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOpenModal = (user: AdminUser) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    getData();
  };

  return (
    <div>
      <Modal
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        closeAfterTransition
        onClose={() => setModalOpen(false)}
        open={isModalOpen}
      >
        <Fade in={isModalOpen}>
          <EditModal
            user={selectedUser!}
            closeModal={() => setModalOpen(false)}
            refreshUsers={getData}
          >
            xd
          </EditModal>
        </Fade>
      </Modal>
      {users &&
        users.length > 0 &&
        users.map((user) => (
          <UserWrapper key={user.id}>
            <div>
              <i className="fas fa-user" />
              <p>{user.name}</p>
            </div>
            <div>
              <p>User id: {user.id}</p>
              <p>Email: {user.email}</p>
              <p>RFID id: {user.rfid_card_id ? user.rfid_card_id : "No id"}</p>
              <p>Account status: {user.is_active ? "Active" : "Inactive"}</p>
              <p>User role: {user.role}</p>
            </div>
            <div>
              <i
                onClick={() => handleOpenModal(user)}
                className="fas fa-edit"
              />
              {user.role === "ADMIN" ? (
                <i style={{ visibility: "hidden" }} className="fas fa-trash" />
              ) : (
                <i
                  onClick={() => handleDelete(user.id)}
                  className="fas fa-trash"
                />
              )}
            </div>
          </UserWrapper>
        ))}
    </div>
  );
};

export default Users;
