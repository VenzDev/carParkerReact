import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import Wrapper from "./components/Wrapper";
import DashboardWrapper from "./components/DashboardWrapper";
import Spinner from "./components/Reusable/Spinner";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: calc(100% - 70px);
`;

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Account = lazy(() => import("./pages/Account"));
const Support = lazy(() => import("./pages/Support"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer/>
      <Switch>
        <Route path="/home">
          <Wrapper>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/home/login" component={Login} />
              <Route exact path="/home/register" component={Register} />
              <Redirect to="/404" />
            </Switch>
          </Wrapper>
        </Route>
        <Route exact path="/404" component={NotFound} />
        <Route path="/">
          <DashboardWrapper>
            <Suspense
              fallback={
                <LoadingDiv>
                  <Spinner />
                </LoadingDiv>
              }
            >
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/orders" component={Orders} />
                <Route exact path="/account" component={Account} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/support" component={Support} />
                <Redirect to="/404" />
              </Switch>
            </Suspense>
          </DashboardWrapper>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
