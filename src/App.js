import React from "react";
import "./SCSS/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Admin/Login";
import SignUp from "./components/Admin/Signup";
import RecentPublications from "./components/Admin/RecentPublications";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/recentpublication"
            component={RecentPublications}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
