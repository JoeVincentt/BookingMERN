import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import AuthPage from "./Pages/Auth";
import BookingsPage from "./Pages/Bookings";
import EventsPage from "./Pages/Events";
import MainNavigation from "./components/Navigation/MainNavigation";
import AuthContext from "./context/auth-context";

class App extends Component {
  state = {
    activeNav: "",
    token: null,
    userId: null
  };

  changeNavActiveLink = address => {
    this.setState({ activeNav: address });
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token, userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    const { activeNav } = this.state;
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            <MainNavigation
              changeNavActiveLink={this.changeNavActiveLink}
              activeNav={activeNav}
            />
            <main className="container">
              <Switch>
                {!this.state.token && <Redirect exact path="/" to="/auth" />}
                {this.state.token && <Redirect exact path="/" to="/events" />}
                {this.state.token && (
                  <Redirect exact path="/auth" to="/events" />
                )}
                {!this.state.token && (
                  <Route path="/auth" component={AuthPage} />
                )}

                <Route path="/events" component={EventsPage} />
                {this.state.token && (
                  <Route path="/bookings" component={BookingsPage} />
                )}
              </Switch>
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
