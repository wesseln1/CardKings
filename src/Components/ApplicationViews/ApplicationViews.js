import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
// import Splash from "../Auth/Splash";
// import Login from "../Auth/Login";
// import Register from "../Auth/Register";
import Home from "../Home/Home";
import ProfileList from "../MyProfile/ProfileList";
import App from "../../App";
import CardList from "../MyCards/CardList";

export default class ApplicationViews extends Component {
//   isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  render() {
      console.log("at app", this.props.user)
    return (
      <>
        <Route
          exact
          path="/"
          render={props => {
              console.log("home", this.props.user)
              if (this.props.user) {
                  return (
                      <Home
                  key={this.props.currentUser}
                  currentUser={this.props.currentUser}
                  setUser={this.props.setUser}
                  isAuthenticated={this.props.isAuthenticated}
                  {...props}
                  />
                  );
                } else {
              return <App />;
            }
          }}
        />
        <Route
          exact
          path="/:userId(\d+)"
          render={props => {
              console.log("user",this.props.user)
              if (this.props.user) {
              return (
                <ProfileList
                  key={this.props.currentUser}
                  user={this.props.user}
                  currentUser={this.props.currentUser}
                  setUser={this.props.setUser}
                  {...props}
                />
              );
            } else {
              return <App/>;
            }
          }}
        />
        {/* <Route
          exact
          path="/collection/:userId(\d+)"
          render={props => {
              console.log("user",this.props.user)
              if (this.props.user) {
              return (
                <CardList
                  key={this.props.currentUser}
                  user={this.props.user}
                  currentUser={this.props.currentUser}
                  setUser={this.props.setUser}
                  {...props}
                />
              );
            } else {
              return <App/>;
            }
          }}
        /> */}
      </>
    );
  }
}
