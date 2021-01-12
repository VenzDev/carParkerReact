import { TextField } from "@material-ui/core";
import React, { FormEvent, FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { verifyAccount } from "../../../api/Api";
import Spinner from "../../../components/Reusable/Spinner";
import { setActiveAccount } from "../../../features/User/slice";
import { Content, CloseButton, SubmitButton, ErrorMessage } from "./styles";

interface IModal {
  closeModal: () => void;
}

const VerifyModal: FunctionComponent<IModal> = ({ closeModal }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCode(e.currentTarget.value);
  };

  const handleSubmit = () => {
    verifyAccount(code)
      .then(() => {
        dispatch(setActiveAccount(true));
        closeModal();
      })
      .catch(() => {
        setError("Invalid code");
        setLoading(false);
      });
  };

  const handleClick = () => {
    setLoading(true);
    handleSubmit();
  };

  return (
    <Content>
      <p>Verify Account</p>
      <CloseButton onClick={closeModal}>
        <i className="fas fa-times"></i>
      </CloseButton>
      <TextField onChange={(e) => handleSearch(e)} label="Activation code" />
      {error.length > 0 && <ErrorMessage>{error}</ErrorMessage>}
      <SubmitButton onClick={handleClick}>
        {loading ? <Spinner small white /> : "Verify"}
      </SubmitButton>
    </Content>
  );
};

export default VerifyModal;
