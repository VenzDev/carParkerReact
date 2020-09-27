import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo3.svg";
import { motion } from "framer-motion";
import { logout } from "../../api/Api";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Spinner from "../Reusable/Spinner";
import { setToast, LOGIN } from "../../utils/toast";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout as logoutRedux } from "../../features/User/slice";
import { User } from "../../features/types";

const HeaderWrapper = styled.div`
  position: fixed;
  width: 80%;
  margin-left: 20%;
  padding: 0 3rem;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
  z-index: 10;

  @media (max-width: 950px) {
    margin-left: 0;
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const Flex = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IArrow {
  rotate: boolean;
}

const Arrow = styled.div`
  background-color: #0080ff;
  margin-left: 0.5rem;
  height: 25px;
  width: 25px;
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  color: white;
  transition: 0.3s;
  transform: ${({ rotate }: IArrow) => rotate && "rotate(180deg)"};
`;

const LogoImg = styled.img`
  display: none;
  width: 40px;
  height: 40px;

  @media (max-width: 950px) {
    display: block;
  }
`;

const H2 = styled.h2`
  font-weight: 200;
  margin-left: 1rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Logout = styled(motion.div)`
  position: absolute;
  background-color: white;
  top: 80px;
  padding: 0.5rem;
  width: 120px;
  border-radius: 10px;
  box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.1);
`;

const LogoutButton = styled.p`
  cursor: pointer;
  height: 25px;
  text-align: center;
`;

const Header: FunctionComponent<RouteComponentProps> = ({ history }) => {
  const [isUserMenu, setUserMenu] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const user: User = useSelector(selectUser);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "20%" },
  };

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(logoutRedux({}));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setToast(LOGIN, "Successfully logged out");
      history.push("/login");
    }
  };

  return (
    <HeaderWrapper>
      <Flex>
        <LogoImg src={logo} alt="logo" />
        <H2>Hello, {user.name}</H2>
      </Flex>
      <Flex>
        <p onClick={() => setUserMenu(!isUserMenu)}>{user.name}</p>
        <Arrow onClick={() => setUserMenu(!isUserMenu)} rotate={isUserMenu}>
          <i className="fas fa-angle-down"></i>
        </Arrow>
        <Logout
          animate={isUserMenu ? "open" : "closed"}
          transition={{ duration: 0.5, times: [0, 0.5], ease: "easeInOut", delay: 0 }}
          variants={variants}
        >
          <LogoutButton
            onClick={() => {
              setLoading(true);
              handleLogout();
            }}
          >
            {isLoading ? <Spinner small /> : "Logout"}
          </LogoutButton>
        </Logout>
      </Flex>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
