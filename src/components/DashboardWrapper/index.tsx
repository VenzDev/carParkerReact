import React, { FunctionComponent } from "react";
import { styled } from "../../styles/theme";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

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

const DashboardWrapper: FunctionComponent = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};

export default DashboardWrapper;
