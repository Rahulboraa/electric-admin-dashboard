import React from "react";
import "./SCSS/index.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Login from "./components/Admin/Login";
import SignUp from "./components/Admin/Signup";
import RecentPublications from "./components/Admin/RecentPublications";
import VehicleTable from "./components/Vehicle/VehicleTable";
import Vehicle from "./components/Vehicle/Vehicle";
import Brands from "./components/brands/brands";
import AddBrands from "./components/brands/Dialogs/AddBrands";
import AddVehicle from "./components/Vehicle/VehicleApplication";
import VehicleStepper from "./components/Vehicle/VehicleStepper";
import Sidebar from "./components/common/sidebar";
import StoreApplication from "./components/Store/StoreApplication";
import Store from "./components/Store/Store.js";
function App() {
  const history = useHistory();
  console.log(window.location.pathname === "/");
  const Routes = [
    {
      path: "/",
      exact: true,
      main: () => <Login />,
    },
    {
      path: "/signup",
      main: () => <SignUp />,
    },
    {
      path: "/recentpublication",
      main: () => <RecentPublications />,
    },
    {
      path: "/vehicleapplication",
      main: () => <VehicleTable />,
    },
    {
      path: "/vehicle",
      main: () => <Vehicle />,
    },
    {
      path: "/brands",
      main: () => <Brands />,
    },
    {
      path: "/addbrands",
      main: () => <AddBrands />,
    },
    {
      path: "/addvehicle",
      main: () => <AddVehicle />,
    },
    {
      path: "/vehiclestepper",
      main: () => <VehicleStepper />,
    },
    {
      path: "/storeApplication",
      main: () => <StoreApplication />,
    },
    {
      path: "/store",
      main: () => <Store />,
    },
  ];

  return (
    <>
      <Router>
        <div
          style={{
            display:
              window.location.pathname == "/" ||
              window.location.pathname == "/signup"
                ? ""
                : "flex",
          }}
        >
          <div>
            {window.location.pathname == "/" ||
            window.location.pathname == "/signup" ? (
              ""
            ) : (
              <Sidebar />
            )}
          </div>
          <div>
            <div
              style={{
                flex:
                  window.location.pathname == "/" ||
                  window.location.pathname == "/signup"
                    ? ""
                    : 1,
                padding:
                  window.location.pathname == "/" ||
                  window.location.pathname == "/signup"
                    ? ""
                    : "10px",
              }}
            >
              <Switch>
                {Routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
