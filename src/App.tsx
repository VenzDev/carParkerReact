import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import Wrapper from "./components/Wrapper";
import DashboardWrapper from "./components/DashboardWrapper";
import Spinner from "./components/Reusable/Spinner";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/dashboard">
          <DashboardWrapper>
            <Suspense
              fallback={
                <LoadingDiv>
                  <Spinner />
                </LoadingDiv>
              }
            >
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/dashboard/orders">
                <Orders />
              </Route>
              <Route exact path="/dashboard/account">
                <Account />
              </Route>
              <Route exact path="/dashboard/admin">
                <Admin />
              </Route>
              <Route exact path="/dashboard/support">
                <Support />
              </Route>
            </Suspense>
          </DashboardWrapper>
        </Route>
        <Route path="/">
          <Wrapper>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Wrapper>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
