import React from "react";
import "./SCSS/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Admin/Login";
import Vehicle from "./components/Vehicle/Vehicle";
import Brands from "./components/brands/brands";
import AddBrands from "./components/brands/Dialogs/AddBrands";
import AddVehicle from "./components/Vehicle/VehicleApplication";
import VehicleStepper from "./components/Vehicle/VehicleStepper";
import Store from "./components/Store/Store";
import AddStore from "./components/Store/AddStore";
import Home from "./components/Admin/home/Home";
import DealerApplications from "./components/Dealer/DealerApplications";
import DealarForm from "./components/Dealer/DealerForm";
import AddDealer from "./components/Dealer/AddDealer";
import UpcomingBookings from "./components/Bookings/UpcomingBookings";
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
import Careers from "./components/Website/Careers/Careers";
import EditCareer from "./components/Website/Careers/EditCareer";
import EditBrands from "./components/brands/EditBrands";
import EditTeamMember from "./components/Teams/EditTeamMember";
import EditStore from "./components/Store/EditStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditTestimonial from "./components/Website/Testimonial/EditTestimonial";
import ScrollToTop from "./components/ScrollToTop";
import Approvals from "./components/Merchandise/Approvals";
import RefundBooking from "./components/Bookings/RefundBooking";
import Brochure from "./components/Merchandise/Brochure";
import ViewAllCareer from "./components/Website/Careers/ViewAllCareer";
import NewOpenings from "./components/Website/Careers/NewOpenings";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Login} />

            <PrivateRoute exact path="/vehicle" Component={Vehicle} />
            <PrivateRoute exact path="/edit/:id" Component={EditVehicle} />
            <PrivateRoute
              exact
              path="/vehicle/edit/:id"
              Component={EditVehicleTable}
            />
            <PrivateRoute
              exact
              path="/vehiclestepper"
              Component={VehicleStepper}
            />
            <PrivateRoute exact path="/addvehicle" Component={AddVehicle} />

            <PrivateRoute exact path="/brands" Component={Brands} />
            <PrivateRoute
              exact
              path="/brands/edit/:id"
              Component={EditBrands}
            />
            <PrivateRoute exact path="/addbrands" Component={AddBrands} />

            <PrivateRoute exact path="/store" Component={Store} />
            <PrivateRoute exact path="/editstore/:id" Component={EditStore} />
            <PrivateRoute exact path="/addstore" Component={AddStore} />
            <PrivateRoute exact path="/home" Component={Home} />
            <PrivateRoute exact path="/vehiclesales" Component={Home} />
            <PrivateRoute exact path="/booking" Component={Booking} />
            <PrivateRoute exact path="/newdealers" Component={NewDealers} />
            <PrivateRoute exact path="/newstore" Component={NewStore} />
            <PrivateRoute exact path="/dealarform" Component={DealarForm} />
            <PrivateRoute
              exact
              path="/delarapplication"
              Component={DealerApplications}
            />
            <PrivateRoute exact path="/adddealer" Component={AddDealer} />

            <PrivateRoute
              exact
              path="/upcommingbookings"
              Component={UpcomingBookings}
            />
            <PrivateRoute
              exact
              path="/refundbooking"
              Component={RefundBooking}
            />
            <PrivateRoute exact path="/teammember" Component={TeamMember} />

            <PrivateRoute
              exact
              path="/teams/edit/:id"
              Component={EditTeamMember}
            />
            <PrivateRoute
              exact
              path="/addteamember"
              Component={AddTeamMember}
            />
            <PrivateRoute exact path="/brochure" Component={Brochure} />

            <PrivateRoute exact path="/approvals" Component={Approvals} />
            <PrivateRoute exact path="/merchandise" Component={Merchandise} />
            <PrivateRoute exact path="/visitingcard" Component={VisitingCard} />
            <PrivateRoute exact path="/careers" Component={Careers} />
            <PrivateRoute exact path="/editCareer/:id" Component={EditCareer} />
            <PrivateRoute exact path="/viewall" Component={ViewAllCareer} />
            <PrivateRoute exact path="/newopening" Component={NewOpenings} />

            <PrivateRoute
              exact
              path="/recentpublications"
              Component={RecentPublication}
            />
            <PrivateRoute
              exact
              path="/addrecentpublication"
              Component={AddRecentPublications}
            />
            <PrivateRoute
              exact
              path="/editrecentpublication/:id"
              Component={EditRecentPublication}
            />
            <PrivateRoute exact path="/testimonials" Component={Testimonials} />
            <PrivateRoute
              exact
              path="/addtestimonial"
              Component={AddTestimonial}
            />

            <PrivateRoute
              exact
              path="/edittestimonial/:id"
              Component={EditTestimonial}
            />

            <PrivateRoute exact path="/gallery" Component={Gallery} />
            <PrivateRoute exact path="/addgallery" Component={AddGallery} />
          </Switch>
        </Router>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen="false" position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
