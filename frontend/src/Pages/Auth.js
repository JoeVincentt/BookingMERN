import React, { Component } from "react";
import {} from "react-router-dom";

class Auth extends Component {
  state = {
    isLogin: true
  };

  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  switchModeHandler = () => {
    this.setState(prevState => {
      return { isLogin: !prevState.isLogin };
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
      query {
        login(email:"${email}", password: "${password}"){
          userId
          token
          tokenExpiration
        }
      }
      `
    };

    if (!this.state.isLogin) {
      requestBody = {
        query: `
        mutation {
          createUser(userInput: {email: "${email}", password: "${password}"}) {
            _id
            email
          }
        }
      `
      };
    }

    fetch("http://localhost:5000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed");
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12 auth-form" onSubmit={this.submitHandler}>
            {/* <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="Placeholder"
                  id="first_name"
                  type="text"
                  className="validate"
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div> */}
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  ref={this.emailEl}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  ref={this.passwordEl}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="form-actions">
              {" "}
              <button className="btn waves-effect waves-light" type="submit">
                Submit
              </button>
              <button
                className="btn waves-effect waves-light red"
                type="button"
                onClick={this.switchModeHandler}
              >
                Switch to {this.state.isLogin ? "Signup" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
