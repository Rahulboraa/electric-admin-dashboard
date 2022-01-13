import React from "react";
import "./SCSS/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Admin/Login";
import SignUp from "./components/Admin/Signup";
import RecentPublications from "./components/Admin/RecentPublications";
import VehicleTable from "./components/Vehicle/VehicleTable";
import Vehicle from "./components/Vehicle/Vehicle";
import Brands from "./components/brands/brands";
import AddBrands from "./components/brands/Dialogs/AddBrands";
import AddVehicle from "./components/Vehicle/VehicleApplication";
import VehicleStepper from "./components/Vehicle/VehicleStepper";
import Home from "./components/Admin/home/Home";
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
          <Route exact path="/vehicleapplication" component={VehicleTable} />
          <Route exact path="/vehicle" component={Vehicle} />
          <Route exact path="/brands" component={Brands} />
          <Route exact path="/addbrands" component={AddBrands} />
          <Route exact path="/addvehicle" component={AddVehicle} />
          <Route exact path="/vehiclestepper" component={VehicleStepper} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
