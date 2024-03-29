import React, { Component } from "react";
import APIManager from "../../Modules/APIManager";
import { Link } from "react-router-dom";
import { Button } from "reactstrap"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "./Auth.css";

export default class Login extends Component {
  state = {
    user: "",
    username: "",
    password: "",
    userId: ""
  };

  handleLogin = () => {
    APIManager.getUser(this.state.username).then(users => {
      let exsistingUser = users.shift();
      //   console.log(this.state.username)
      if (exsistingUser === undefined) {
        window.alert("You need to register first!");
        return this.props.history.push("/register");
      } else if (this.state.password === exsistingUser.password) {
        this.setCredentials().then(() => this.props.history.push("/"));
      } else {
        window.alert("Uh-Oh! Looks like your password was wrong!");
        return this.props.history.push("/login");
      }
    });
  };

  setCredentials = () => {
    return APIManager.getUser(this.state.username).then(user => {
      let me = user.shift();
      let credentials = me.id;
      this.props.setUser(credentials);
    });
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  render() {
    return (
      <div  className="loginMainDiv">
        <MDBContainer className="loginContainer">
          {/* <MDBRow> */}
            <MDBCol md="6" className="loginCol">
              <form>
                <p className="h4 text-center mb-4">Sign in</p>
                <label htmlFor="defaultFormLoginEmailEx">
                  Your email
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  onChange={this.handleFieldChange}
                />
                <br />
                <label
                  htmlFor="defaultFormLoginPasswordEx"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  onChange={this.handleFieldChange}
                />
                <div className="text-center mt-4">
                  <Link to="/">
                    <Button className="loginButton" onClick={this.handleLogin}>
                      Login
                    </Button>
                  </Link>
                </div>
              </form>
            </MDBCol>
          {/* </MDBRow> */}
        </MDBContainer>
      </div>
    );
  }
}
