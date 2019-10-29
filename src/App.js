import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import APIManager from "./Modules/APIManager";
import LoginViews from "./Components/LoginViews/LoginViews";
import ApplicationViews from "./Components/ApplicationViews/ApplicationViews";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default class App extends Component {
  state = {
    user: null,
    currentUser: "",
    render: 1,
    cards: [],
    favCards: []
  };

  getFavorites = () => {
    console.log("run")
    APIManager.getFavoritedCards(sessionStorage.getItem("credentials")).then(
      cards => {
        this.setState({
          favCards: cards
        });
        console.log("here", this.state.favCards)
      }
    );
  };

  isAuthenticated = () => {
    if (sessionStorage.getItem("credentials") !== null) {
      return true;
    } else if (localStorage.getItem("credentials") !== null) {
      return true;
    } else {
      return false;
    }
  };

  updateCardLists(){
    console.log("run")
    this.getData()
    this.getFavorites()
  }

  reRender = () => {
    if (this.state.render === 2) {
      this.setState({
        render: 1
      });
    } else {
      this.setState({
        render: 2
      });
    }
  };

  setUser = authUser => {
    sessionStorage.setItem("credentials", JSON.stringify(authUser));
    this.setState({
      user: true,
      currentUser: this.getUser()
    }, this.getFavorites());
  };

  updateUser = () => {
    console.log("running", this.state.currentUser);
    sessionStorage.setItem("credentials", this.state.currentUser);
    this.setState({
      user: true,
      currentUser: sessionStorage.getItem("credentials")
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
    });
    // return <Redirect to="/splash" />
  };

  getData = () => {
    let userId = sessionStorage.getItem("credentials");
    APIManager.getExpandedItems("userCards", "user", userId, "card").then(
      cards => {
        // console.log("hereeeee", cards);
        this.setState({
          cards: cards
        });
      }
    );
  };

  render() {
    return (
      <>
        {this.state.user
          ? (console.log("true"),
            (
              <>
                <NavBar
                  handleLogout={this.handleLogout}
                  updateCardLists={this.updateCardLists}
                  isAuthenticated={this.isAuthenticated}
                  getFavorites={this.getFavorites}
                  faveCards={this.state.faveCards}
                  currentUser={this.state.currentUser}
                  updateUser={this.updateUser}
                  getData={this.getData}
                  user={this.state.user}
                  reRender={this.reRender}
                />
                <ApplicationViews
                  cards={this.state.cards}
                  updateCardLists={this.updateCardLists}
                  getFavorites={this.getFavorites}
                  favCards={this.state.favCards}
                  currentUser={this.state.currentUser}
                  handleLogout={this.handleLogout}
                  isAuthenticated={this.isAuthenticated}
                  setUser={this.setUser}
                  updateUser={this.updateUser}
                  getUser={this.getUser}
                  getData={this.getData}
                  handleLogin={this.handleLogin}
                  user={this.state.user}
                  reRender={this.reRender}
                />
              </>
            ))
          : (console.log("false", this.state.user),
            (
              <>
                <Redirect to="/splash" />
                <LoginViews
                  currentUser={this.state.currentUser}
                  getFavorites={this.getFavorites}
                  handleLogout={this.handleLogout}
                  faveCards={this.state.faveCards}
                  isAuthenticated={this.isAuthenticated}
                  setUser={this.setUser}
                  getUser={this.getUser}
                  handleLogin={this.handleLogin}
                  user={this.state.user}
                />
              </>
            ))}
      </>
    );
  }
  // }
}
