import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import APIManager from "../../Modules/APIManager";

export default class Login extends Component {
  state = {
    user: {},
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    userId: "",
    DoB: "",
    favTeam: ""
  };

  setCredentials = () => {
    APIManager.getUser(this.state.username).then(user => {
        let me = user.shift()
        console.log(me)
      let credentials = me.id
      this.props.setUser(credentials);
    });
  };

newUser = e => {
  e.preventDefault();
  let user = {
    username: this.state.username,
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    password: this.state.password,
    DoB: this.state.DoB,
    favTeam: this.state.favTeam,
    collectorLevel: 1
  };
  APIManager.getUser(this.state.username).then(users => {
    let exsistingUser = users.shift();
    //   console.log(this.state.username)
    if (exsistingUser !== undefined) {
      return this.props.history.push("/login");
    } else {
      APIManager.post("users", user).then(() => {
        this.setCredentials();
        return this.props.history.push("/");
      });
    }
  });
};

handleFieldChange = evt => {
  const stateToChange = {};
  stateToChange[evt.target.id] = evt.target.value;
  this.setState(stateToChange);
};

render = () => {
  return (
    <div  className="loginMainDiv">
    <MDBContainer className="loginContainer">
      {/* <MDBRow> */}
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Make an account!</p>
            <label htmlFor="defaultFormLoginEmailEx" >
              Username
            </label>
            <input
              required
              placeholder="Username"
              type="text"
              id="username"
              className="form-control"
              onChange={this.handleFieldChange}
            />
            <br />
            <label htmlFor="defaultFormLoginEmailEx" >
              First Name
            </label>
            <input
              placeholder="First Name"
              type="text"
              id="firstName"
              className="form-control"
              onChange={this.handleFieldChange}
            />
            <br />
            <label htmlFor="defaultFormLoginEmailEx" >
              Last Name
            </label>
            <input
              placeholder="Last Name"
              type="text"
              id="lastName"
              className="form-control"
              onChange={this.handleFieldChange}
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" >
              Password
            </label>
            <input
              required
              placeholder="Password"
              type="password"
              id="password"
              className="form-control"
              onChange={this.handleFieldChange}
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" >
              Date of Birth
            </label>
            <input
              type="date"
              id="DoB"
              className="form-control"
              onChange={this.handleFieldChange}
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" >
              Favorite Sports Team
            </label>
            <input
              type="text"
              id="favTeam"
              className="form-control"
              onChange={this.handleFieldChange}
            />
            <div className="text-center mt-4">
              <Link to="/">
                <MDBBtn  type="button" onClick={this.newUser}>
                  Login
                </MDBBtn>
              </Link>
            </div>
          </form>
        </MDBCol>
      {/* </MDBRow> */}
    </MDBContainer>
    </div>
  );
};
}