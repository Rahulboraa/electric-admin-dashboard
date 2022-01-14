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
import StoreApplication from "./components/Store/StoreApplication";
import Store from "./components/Store/Store";
import AddStore from "./components/Store/AddStore";
import Home from "./components/Admin/home/Home";
import DealerApplications from "./components/Dealer/DealerApplications";
import DealarForm from "./components/Dealer/DealerForm";
import AddDealer from "./components/Dealer/AddDealer";
import UpcomingBookings from "./components/Bookings/UpcomingBookings";
import PastBooking from "./components/Bookings/PastBooking";
import TeamMember from "./components/Teams/TeamMember";

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
          <Route exact path="/storeapplication" component={StoreApplication} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/addstore" component={AddStore} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/dealarform" component={DealarForm} />
          <Route
            exact
            path="/delarapplication"
            component={DealerApplications}
          />
          <Route exact path="/adddealer" component={AddDealer} />
          <Route exact path="/upcommingbookings" component={UpcomingBookings} />
          <Route exact path="/pastbooking" component={PastBooking} />
          <Route exact path="/teammember" component={TeamMember} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
