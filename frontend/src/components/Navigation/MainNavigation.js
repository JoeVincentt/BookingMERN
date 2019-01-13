import React from "react";
import { Navbar, Button } from "react-materialize";
import { Link } from "react-router-dom";

const mainNavigation = ({ changeNavActiveLink, activeNav }) => {
  return (
    <Navbar
      brand="EasyEvent"
      right
      trigger={<Button>Nav Close</Button>}
      options={{ closeOnClick: true }}
    >
      <li
        onClick={() => changeNavActiveLink("auth")}
        className={activeNav === "auth" ? "active" : ""}
      >
        <Link to="/auth">Authenticate</Link>
      </li>
      <li
        onClick={() => changeNavActiveLink("events")}
        className={activeNav === "events" ? "active" : ""}
      >
        <Link to="/events">Events</Link>
      </li>
      <li
        onClick={() => changeNavActiveLink("bookings")}
        className={activeNav === "bookings" ? "active" : ""}
      >
        {" "}
        <Link to="/bookings">Bookings</Link>
      </li>
    </Navbar>
  );
};

export default mainNavigation;
