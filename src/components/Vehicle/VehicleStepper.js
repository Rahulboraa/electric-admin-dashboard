import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Sidebar from "../common/sidebar";
import upload from "./../../assets/vehicles/upload.svg";
import Navigation from "./Navigation/Navigation";

const VehicleStepper = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="navbarTop">
          <h3 className="navbarTopHeading">Vehicles</h3>
          <nav className="navbarContainer">
            <Navigation />
          </nav>
          <h4 style={{ marginBottom: "2.18rem" }}> Add Vehicle</h4>

          <section
            className="d-flex  justify-content-between align-items-center"
            style={{
              border: "1px solid #D4D4D4",
              paddingTop: "24px",
              paddingBottom: "24px",
              paddingLeft: "30px",
            }}
          >
            <div style={{ marginRight: "20px" }}>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Choose Color</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Scooter</DropdownItem>
                  <DropdownItem>Electric Bicycle</DropdownItem>
                  <DropdownItem>Moped</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            <div
              className="d-flex justify-content-center m-auto align-items-center "
              style={{ gap: "40px" }}
            >
              <figure>
                <img src={upload} alt="imageUpload" className="imageUpload" />
              </figure>
              <figure>
                <img src={upload} alt="imageUpload" className="imageUpload" />
              </figure>
              <figure>
                <img src={upload} alt="imageUpload" className="imageUpload" />
              </figure>
              <figure>
                <img src={upload} alt="imageUpload" className="imageUpload" />
              </figure>
              <figure>
                <img src={upload} alt="imageUpload" className="imageUpload" />
              </figure>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default VehicleStepper;
