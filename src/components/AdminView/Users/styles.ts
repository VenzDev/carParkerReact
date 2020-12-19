import styled from "styled-components";

export const UserWrapper = styled.div`
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > i {
      font-size: 3rem;
    }
  }
  > div:nth-child(2) {
    > p {
      margin: 0.5rem;
    }

    flex: 0 0 50%;
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
  }
`;
