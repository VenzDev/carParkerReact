import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/User/slice";
import { Wrapper } from "./styles";

const Warning: FunctionComponent = () => {
  const user = useSelector(selectUser);
  return !user.is_active ? (
    <Wrapper>
      <i className="fas fa-exclamation-circle"></i>
      <span>Verify your account (Check page Account)</span>
    </Wrapper>
  ) : null;
};

export default Warning;
