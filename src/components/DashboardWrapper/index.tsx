import React, { FunctionComponent, useState, useEffect } from "react";
import { styled } from "../../styles/theme";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { auth } from "../../api/Api";
import Spinner from "../../components/Reusable/Spinner";
import { withRouter, RouteComponentProps } from "react-router-dom";

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

const DashboardWrapper: FunctionComponent<DashboardWrapper> = ({ children, history }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function authUser() {
      try {
        await auth();
        setLoading(false);
      } catch (e) {
        history.push("/login");
      }
    }

    authUser();
  }, []);
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
