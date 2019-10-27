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
    user: true,
    currentUser: ""
  };

  isAuthenticated = () => {
    if(sessionStorage.getItem("credentials") !== null) {
      console.log("heyyyooo its true")
      this.setState({user: true})
      return true
    } else if (localStorage.getItem("credentials") !== null){
      this.setState({user: true})
      return true
    } else {
      console.log("fuuuu its false")
      this.setState({user: false})
      return false
    }
  }
    

  setUser = authUser => {
    sessionStorage.setItem("credentials", JSON.stringify(authUser));
    this.setState({
      user: true,
      currentUser: this.getUser()
    });
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
    // if(this.isAuthenticated() === true){
      // this.setState({
        // user: true
      // })
    // } 
    // this.isAuthenticated() ?  this.setState({user: true}) : this.setState({user: false})
  // }

  render() {
      return (
        <>
        {this.user ? (
        console.log("true"),
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
          console.log("false", this.state.user),
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
