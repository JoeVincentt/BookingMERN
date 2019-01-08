import React from "react";
import { Navbar, Button } from "react-materialize";
import { Link } from "react-router-dom";

const mainNavigation = props => {
  return (
    <Navbar
      brand="EasyEvent"
      right
      trigger={<Button>Nav Close</Button>}
      options={{ closeOnClick: true }}
    >
      <li>
        <Link to="/auth">Authenticate</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        {" "}
        <Link to="/bookings">Bookings</Link>
      </li>
    </Navbar>
  );
};

export default mainNavigation;
