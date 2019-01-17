import React from "react";
import { Navbar, Button } from "react-materialize";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const mainNavigation = ({ changeNavActiveLink, activeNav }) => {
  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <Navbar
            brand="EasyEvent"
            right
            trigger={<Button>Nav Close</Button>}
            options={{ closeOnClick: true }}
            className="blue"
          >
            {!context.token && (
              <li
                onClick={() => changeNavActiveLink("auth")}
                className={activeNav === "auth" ? "active" : ""}
              >
                <Link to="/auth">Authenticate</Link>
              </li>
            )}

            <li
              onClick={() => changeNavActiveLink("events")}
              className={activeNav === "events" ? "active" : ""}
            >
              <Link to="/events">Events</Link>
            </li>
            {context.token && (
              <li
                onClick={() => changeNavActiveLink("bookings")}
                className={activeNav === "bookings" ? "active" : ""}
              >
                {" "}
                <Link to="/bookings">Bookings</Link>
              </li>
            )}
          </Navbar>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default mainNavigation;
