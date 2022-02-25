import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { NavLink, useParams } from "react-router-dom";
import axios from "../../../../api/instance";

const options = [
  "View Recevied Application",
  "Edit Details",
  "Deactivate Opening",
  "Delete",
];

const ITEM_HEIGHT = 48;

export default function Kebab() {
  const { id } = useParams();
  console.log({ id }, "kabebID");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteCareer = (id) => {
    axios
      .delete(`/career/deleteJob/${id}`)
      .then((result) => {
        console.log(result.data.jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20rem",
          },
        }}
      >
        <NavLink
          to="/receviedApplication"
          style={{ color: "black", textDecoration: "none" }}
        >
          <MenuItem>View Recevied Application</MenuItem>
        </NavLink>
        <NavLink
          to="/editCareer"
          style={{ color: "black", textDecoration: "none" }}
        >
          <MenuItem>Edit Details</MenuItem>
        </NavLink>
        <NavLink
          to="/deactivate"
          style={{ color: "black", textDecoration: "none" }}
        >
          <MenuItem>Deactivate Opening</MenuItem>
        </NavLink>

        <MenuItem
          onClick={() => {
            deleteCareer(id);
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
}
