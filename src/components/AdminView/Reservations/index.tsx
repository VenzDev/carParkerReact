import { InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { deleleReservation, getAllReservations } from "../../../api/Api";
import { AdminReservations } from "../../../features/types";
import { BackButton } from "../Users/styles";
import { FilterPanel, Reservation, StyledSelect } from "./styles";

const Reservations: FunctionComponent = () => {
  const [data, setData] = useState<AdminReservations | null>(null);
  const [selectFilter, setSelectFilter] = useState("all");
  const [filters, setFilters] = useState({ search: "", options: {} });

  const getData = async () => {
    const data = await getAllReservations();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterReservations = () => {
    if (!data) return [];
    let _reservations = data.data;
    const search = filters.search;
    console.log(selectFilter);

    if (selectFilter === "reserved")
      _reservations = data.data!.filter(
        (reservation) => reservation.status === "RESERVED"
      );
    else if (selectFilter === "car_on_parking")
      _reservations = data.data!.filter(
        (reservation) => reservation.status === "CAR ON PARKING"
      );

    if (filters.search.length > 0)
      _reservations = data.data!.filter(
        (reservation) => reservation.user_id === parseInt(search)
      );

    return _reservations;
  };

  const handleDelete = async (id: number) => {
    await deleleReservation(id);
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

  const filteredReservations = filterReservations();

  return (
    <div>
      <FilterPanel>
        <StyledSelect>
          <InputLabel>Show only with status</InputLabel>
          <Select onChange={(e) => handleSelectFilter(e)} value={selectFilter}>
            <MenuItem value="all">all statuses</MenuItem>
            <MenuItem value="reserved">reserved</MenuItem>
            <MenuItem value="car_on_parking">car on parking</MenuItem>
          </Select>
        </StyledSelect>
        <TextField
          onChange={(e) => handleSearch(e)}
          label="Filter by user id"
        />
        <BackButton>Show Filters</BackButton>
      </FilterPanel>
      {data &&
        filteredReservations.length > 0 &&
        filteredReservations.map((reservation) => (
          <Reservation key={reservation.id}>
            <div>
              <p>Reservation id: {reservation.id}</p>
              <p>Reservation from: {reservation.reservation_from}</p>
              <p>Reservation to: {reservation.reservation_to}</p>
              <p>Status: {reservation.status}</p>
            </div>
            <div>
              <i className="fas fa-user"></i>
              <p>User id: {reservation.user.id}</p>
              <p>User name: {reservation.user.name}</p>
            </div>
            <div>
              <i className="fas fa-edit"></i>
              <i
                onClick={() => handleDelete(parseInt(reservation.id))}
                className="fas fa-trash"
              ></i>
            </div>
          </Reservation>
        ))}
    </div>
  );
};

export default Reservations;
