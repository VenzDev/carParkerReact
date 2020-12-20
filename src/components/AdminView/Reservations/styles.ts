import { FormControl } from "@material-ui/core";
import styled from "styled-components";

export const Reservation = styled.div`
  position: relative;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  width: 80%;
  margin: 1rem auto;
  background-color: white;
  display: flex;
  align-items: center;

  > div:first-child {
    padding-left: 1rem;
    flex: 0 0 30%;
  }
  > div:nth-child(2) {
    > i {
      font-size: 3rem;
    }

    > p {
      margin: 0.5rem;
    }

    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  > div:last-child {
    > i {
      font-size: 1.5rem;
      margin-right: 1rem;
      transition: 0.2s;
      cursor: pointer;
    }

    > i:first-child:hover {
      color: blue;
    }

    > i:last-child:hover {
      color: red;
    }

    display: flex;
    justify-content: center;
    flex: 0 0 20%;
  }
`;

export const StyledSelect = styled(FormControl)`
  width: 200px;
`;

export const FilterPanel = styled.div`
  height: 70px;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  width: 40%;
  margin: 1rem auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const BackButton = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.color.blueDark};
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;
