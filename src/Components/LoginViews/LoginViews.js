import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Splash from "../Auth/Splash";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import ApplicationViews from "../ApplicationViews/ApplicationViews";

export default class LoginViews extends Component {
  render() {
    return (
      <>
        <>
          <Route
            exact
            path="/splash"
            render={props => {
              return (
                <Splash
                  handleLogout={this.props.handleLogout}
                  setUser={this.props.setUser}
                  {...props}
                />
              );
            }}
          />
          <Route
            exact
            path="/login"
            render={props => {
              return <Login setUser={this.props.setUser} {...props} />;
            }}
          />
          <Route
            exact
            path="/register"
            render={props => {
              return <Register setUser={this.props.setUser} {...props} />;
            }}
          />
        </>
      </>
    );
  }
}
