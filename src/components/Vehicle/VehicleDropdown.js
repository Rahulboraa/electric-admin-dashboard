import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const VehicleDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Select Vehicle Type</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Scooter</DropdownItem>
        <DropdownItem>Electric Bicycle</DropdownItem>
        <DropdownItem>Moped</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default VehicleDropdown;
