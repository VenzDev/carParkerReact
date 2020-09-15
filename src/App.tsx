import React, { useState, useEffect, FormEvent } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
