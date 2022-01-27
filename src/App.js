import React from "react";
import "./SCSS/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Admin/Login";
import SignUp from "./components/Admin/Signup";
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
import AddTeamMember from "./components/Teams/AddTeamMember";
import Merchandise from "./components/Merchandise/Merchandise";
import VisitingCard from "./components/Merchandise/VisitingCard";
import RecentPublication from "./components/Website/RecentPublication/RecentPublication";
import AddRecentPublications from "./components/Website/RecentPublication/AddRecentPublications";
import EditRecentPublication from "./components/Website/RecentPublication/EditRecentPublication";
import Testimonials from "./components/Website/Testimonial/Testimonials";
import AddTestimonial from "./components/Website/Testimonial/AddTestimonial";
import Gallery from "./components/Website/Gallery/Gallery";
import AddGallery from "./components/Website/Gallery/AddGallery";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import EditVehicle from "./components/Vehicle/EditVehicle";
import EditVehicleTable from "./components/Vehicle/EditVehicleTable";
import NewDealers from "./components/Admin/home/NewDealers";
import NewStore from "./components/Admin/home/NewStore";
import Booking from "./components/Admin/home/Booking";
import EditBrands from "./components/brands/EditBrands";
import EditTeamMember from "./components/Teams/EditTeamMember";
import EditStore from "./components/Store/EditStore";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/vehicleapplication" component={VehicleTable} />
            <Route exact path="/vehicle" component={Vehicle} />
            <Route exact path="/edit/:id" component={EditVehicle} />
            <Route
              exact
              path="/vehicle/edit/:id"
              component={EditVehicleTable}
            />
            <Route exact path="/vehiclestepper" component={VehicleStepper} />
            <Route exact path="/addvehicle" component={AddVehicle} />

            <Route exact path="/brands" component={Brands} />
            <Route exact path="/brands/edit/:id" component={EditBrands} />
            <Route exact path="/addbrands" component={AddBrands} />
            <Route
              exact
              path="/storeapplication"
              component={StoreApplication}
            />
            <Route exact path="/store" component={Store} />
            <Route exact path="/editstore/:id" component={EditStore} />
            <Route exact path="/addstore" component={AddStore} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/vehiclesales" component={Home} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/newdealers" component={NewDealers} />
            <Route exact path="/newstore" component={NewStore} />
            <Route exact path="/dealarform" component={DealarForm} />
            <Route
              exact
              path="/delarapplication"
              component={DealerApplications}
            />
            <Route exact path="/adddealer" component={AddDealer} />
            <Route
              exact
              path="/upcommingbookings"
              component={UpcomingBookings}
            />
            <Route exact path="/pastbooking" component={PastBooking} />
            <Route exact path="/teammember" component={TeamMember} />
            <Route exact path="/teams/edit/:id" component={EditTeamMember} />
            <Route exact path="/addteamember" component={AddTeamMember} />
            <Route exact path="/merchandise" component={Merchandise} />
            <Route exact path="/visitingcard" component={VisitingCard} />
            <Route
              exact
              path="/recentpublications"
              component={RecentPublication}
            />
            <Route
              exact
              path="/addrecentpublication"
              component={AddRecentPublications}
            />
            <Route
              exact
              path="/editrecentpublication:id"
              component={EditRecentPublication}
            />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/addtestimonial" component={AddTestimonial} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/addgallery" component={AddGallery} />
          </Switch>
        </Router>
        <ReactQueryDevtools initialIsOpen="false" position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
