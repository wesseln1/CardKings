import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import LoginViews from "./Components/LoginViews/LoginViews";
import ApplicationViews from "./Components/ApplicationViews/ApplicationViews";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default class App extends Component {
  state = {
    user: null,
    currentUser: ""
  };

  isAuthenticated = () => {
    console.log(sessionStorage.getItem("credentials"))
    if(sessionStorage.getItem("credentials") !== null) {
      return true
    } else if (localStorage.getItem("credentials") !== null){
      return true
    } else {
      return false
    }
  }
    

  setUser = authUser => {
    sessionStorage.setItem("credentials", JSON.stringify(authUser));
    this.setState({
      user: true,
      currentUser: this.getUser()
    });
    console.log(this.state.user);
  };

  getUser = () => {
    if (this.isAuthenticated()) {
      let credentials = sessionStorage.getItem("credentials");
      return credentials;
    } else {
      return <Redirect to="/login" />;
    }
  };

  clearUser() {
    sessionStorage.clear();
  }

  handleLogout = () => {
    this.clearUser();
    this.setState({
      user: false
    })
    // return <Redirect to="/splash" />
  };

  // componentDidMount(){
  //   this.setUser()
  // }

  render() {
    // if(sessionStorage.getItem("credentials") !== null){
    //   this.clearUser()
      return (
        <>
        {this.state.user ? (
          <>
            <NavBar
              handleLogout={this.handleLogout}
              isAuthenticated={this.isAuthenticated}
              currentUser={this.state.currentUser}
              user={this.state.user}
              />
            <ApplicationViews
              currentUser={this.state.currentUser}
              handleLogout={this.handleLogout}
              isAuthenticated={this.isAuthenticated}
              setUser={this.setUser}
              getUser={this.getUser}
              handleLogin={this.handleLogin}
              user={this.state.user}
              />
          </>
        ) : (
          <>
          <Redirect to="/splash" />
            <LoginViews
              currentUser={this.state.currentUser}
              handleLogout={this.handleLogout}
              isAuthenticated={this.isAuthenticated}
              setUser={this.setUser}
              getUser={this.getUser}
              handleLogin={this.handleLogin}
              user={this.state.user}
              />
          </>
        )}
      </>
    );
  }
  // }
}
