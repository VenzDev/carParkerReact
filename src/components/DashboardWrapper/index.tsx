import React, { FunctionComponent, useState, useEffect } from "react";
import { styled } from "../../styles/theme";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { auth } from "../../api/Api";
import Spinner from "../../components/Reusable/Spinner";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { login } from "../../features/User/slice";
import { useDispatch } from "react-redux";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const Content = styled.div`
  flex: 0 0 80%;
  margin-top: 70px;
  background-color: #edf7ff;

  @media (max-width: 950px) {
    flex: 0 0 100%;
  }
`;

interface DashboardWrapper extends RouteComponentProps {}

const DashboardWrapper: FunctionComponent<DashboardWrapper> = ({
  children,
  history,
}) => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function authUser() {
      try {
        const user = await auth();
        dispatch(
          login({
            name: user.data.name,
            user_id: user.data.id,
            active_reservations: user.data.reservations.length,
            cars_on_parking: user.data.cars_on_parking,
            isActive: user.data.is_active,
            role: user.data.role,
            has_ticket: user.data.has_ticket,
            email: user.data.email,
          })
        );
        setLoading(false);
      } catch (e) {
        history.push("/home/login");
      }
    }

    if (!document.cookie.includes("XSRF-TOKEN")) {
      history.push("/home");
    } else authUser();
  }, [dispatch, history]);
  return (
    <Wrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Sidebar />
          <Header />
          <Content>{children}</Content>
          <Footer />
        </>
      )}
    </Wrapper>
  );
};

export default withRouter(DashboardWrapper);
