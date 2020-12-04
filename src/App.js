import React from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
