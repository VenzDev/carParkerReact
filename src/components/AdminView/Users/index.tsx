import {
  Backdrop,
  Fade,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@material-ui/core";
import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { deleteUser, getAllUsers } from "../../../api/Api";
import { AdminUser } from "../../../features/types";
import EditModal from "./EditModal";
import FiltersModal from "./FiltersModal";
import { FilterPanel, StyledSelect, UserWrapper, BackButton } from "./styles";

const Users: FunctionComponent = () => {
  const [users, setUsers] = useState<Array<AdminUser> | null>(null);
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFiltersModalOpen, setFiltersModalOpen] = useState(false);
  const [selectFilter, setSelectFilter] = useState("id");
  const [filters, setFilters] = useState({
    search: "",
    options: { onlyInactive: false, emptyRfidId: false },
  });

  const getData = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  const filterUsers = () => {
    let _users = users;
    const search = filters.search;
    if (search.length > 0) {
      if (selectFilter === "id")
        _users = users!.filter((user) => user.id === parseInt(search));
      else if (selectFilter === "name")
        _users = users!.filter((user) => user.name?.includes(search));
      else if (selectFilter === "email")
        _users = users!.filter((user) => user.email?.includes(search));
    }

    if (filters.options.onlyInactive)
      _users = users!.filter((user) => user.is_active === false);

    if (filters.options.emptyRfidId)
      _users = users!.filter((user) => {
        if (!user.rfid_card_id) return true;
        else if (user.rfid_card_id.length === 0) return true;
        return false;
      });

    return _users;
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

  const handleSelectFilter = (e: ChangeEvent<any>) => {
    setSelectFilter(e.target.value);
  };

  const handleSearch = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFilters({ ...filters, search: e.currentTarget.value });
  };

  const filteredUsers = filterUsers();

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
          ></EditModal>
        </Fade>
      </Modal>
      <Modal
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        closeAfterTransition
        onClose={() => setFiltersModalOpen(false)}
        open={isFiltersModalOpen}
      >
        <Fade in={isFiltersModalOpen}>
          <FiltersModal
            setFilters={(filters: any) => setFilters(filters)}
            filters={filters}
            closeModal={() => setFiltersModalOpen(false)}
          ></FiltersModal>
        </Fade>
      </Modal>
      <FilterPanel>
        <StyledSelect>
          <InputLabel>Filter by</InputLabel>
          <Select onChange={(e) => handleSelectFilter(e)} value={selectFilter}>
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="id">Id</MenuItem>
          </Select>
        </StyledSelect>
        <TextField onChange={(e) => handleSearch(e)} label="search" />
        <BackButton onClick={() => setFiltersModalOpen(true)}>
          Show Filters
        </BackButton>
      </FilterPanel>
      {filteredUsers &&
        filteredUsers.length > 0 &&
        filteredUsers.map((user) => (
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
