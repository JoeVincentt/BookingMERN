import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import AuthPage from "./Pages/Auth";
import BookingsPage from "./Pages/Bookings";
import EventsPage from "./Pages/Events";
import MainNavigation from "./components/Navigation/MainNavigation";

class App extends Component {
  state = {
    activeNav: ""
  };

  changeNavActiveLink = address => {
    this.setState({ activeNav: address });
  };

  render() {
    const { activeNav } = this.state;
    return (
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation
            changeNavActiveLink={this.changeNavActiveLink}
            activeNav={activeNav}
          />
          <main className="container">
            <Switch>
              <Redirect exact path="/" to="/auth" />
              <Route path="/auth" component={AuthPage} />
              <Route path="/events" component={EventsPage} />
              <Route path="/bookings" component={BookingsPage} />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;