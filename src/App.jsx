import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./Users";
import UserID from "./UserID";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/:id/details" component={UserID} />
        </Switch>
      </Router>
    </Fragment>
  );
};
export default App;
