import React from "react";
import { Switch, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Account from "./pages/Account";
import Support from "./pages/Support";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import DashboardWrapper from "./components/DashboardWrapper";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/dashboard">
          <DashboardWrapper>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/dashboard/orders">
              <Orders />
            </Route>
            <Route exact path="/dashboard/account">
              <Account />
            </Route>
            <Route exact path="/dashboard/support">
              <Support />
            </Route>
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
