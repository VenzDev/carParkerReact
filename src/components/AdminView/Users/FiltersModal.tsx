import { Switch } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { styled } from "../../../styles/theme";

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

interface IModal {
  closeModal: () => void;
  filters: {
    search: string;
    options: {
      onlyInactive: boolean;
      emptyRfidId: boolean;
    };
  };
  setFilters: (filters: any) => void;
}

const FiltersModal: FunctionComponent<IModal> = ({
  closeModal,
  filters,
  setFilters,
}) => {
  return (
    <Content>
      <CloseButton onClick={closeModal}>
        <i className="fas fa-times" />
      </CloseButton>
      <p>Advanced Filters</p>
      <div>
        <span>Show only Inactive users: </span>
        <Switch
          checked={filters.options.onlyInactive}
          color="primary"
          name="account status"
          onChange={() =>
            setFilters({
              ...filters,
              options: {
                ...filters.options,
                onlyInactive: !filters.options.onlyInactive,
              },
            })
          }
        />
      </div>
      <div>
        <span>Show users with empty rfid id: </span>
        <Switch
          checked={filters.options.emptyRfidId}
          color="primary"
          name="account status"
          onChange={() =>
            setFilters({
              ...filters,
              options: {
                ...filters.options,
                emptyRfidId: !filters.options.emptyRfidId,
              },
            })
          }
        />
      </div>
    </Content>
  );
};

export default FiltersModal;
