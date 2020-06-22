import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "./App";
import UserDetails from "./UserDetails";

const Routing = () => {

  return (
    <React.Fragment>
      <Router>
        <Link to="/">
          <button className="home-btn">Home</button>
        </Link>

        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/:id/details" component={UserDetails} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Routing;
