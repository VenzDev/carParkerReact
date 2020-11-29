import React, { FunctionComponent } from "react";
import { styled } from "../../styles/theme";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/User/slice";
import { GradientButton } from "../../components/Button";

const Wrapper = styled.div`
  padding: 3rem;
`;

const H2 = styled.h2`
  font-weight: normal;
`;

const AccountWrapper = styled.div`
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.05);
  width: 80%;
  margin: 1rem auto;
  background-color: white;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  > i {
    font-size: 3rem;
    padding-right: 1rem;
  }
  > p {
    font-size: 1.5rem;
  }
`;

const ActiveAccount = styled.div`
  padding: 1rem;
`;

const Active = styled.p`
  color: ${({ theme }) => theme.color.blueLight};
`;

const Warning = styled.p`
  color: ${({ theme }) => theme.color.warning};
`;

const Span = styled.span`
  margin-left: 1rem;
`;

const Account: FunctionComponent = () => {
  const user = useSelector(selectUser);
  return (
    <Wrapper>
      <H2>Your account</H2>
      <AccountWrapper>
        <UserName>
          <i className="far fa-user"></i>
          <p>{user.name}</p>
        </UserName>
        <Span>Active reservations: {user.active_reservations}</Span>
        <ActiveAccount>
          {user.isActive ? (
            <Active>Account active, feel free to use the application</Active>
          ) : (
            <>
              <Warning>Account not active, probably your RFID card has not been activated.</Warning>
              <GradientButton>Verify Account</GradientButton>
            </>
          )}
        </ActiveAccount>
      </AccountWrapper>
    </Wrapper>
  );
};

export default Account;
