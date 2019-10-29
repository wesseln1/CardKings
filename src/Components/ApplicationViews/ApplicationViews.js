import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
// import Splash from "../Auth/Splash";
// import Login from "../Auth/Login";
// import Register from "../Auth/Register";
import Home from "../Home/Home";
import ProfileList from "../MyProfile/ProfileList";
import App from "../../App";
import CardList from "../MyCards/CardList";
import APIManager from "../../Modules/APIManager";
// import CardForm from "../MyCards/NewCardForm"

export default class ApplicationViews extends Component {
  //   isAuthenticated = () => sessionStorage.getItem("credentials") !== null;


  render() {
    return (
      <>
        <Route
          exact
          path="/"
          render={props => {
            console.log("home", this.props.user);
            if (this.props.user) {
              return (
                <Home
                  getFavorites={this.props.getFavorites}
                  updateCardLists={this.props.updateCardLists}
                  favCards={this.props.favCards}
                  key={this.props.currentUser}
                  reRender={this.props.reRender}
                  getData={this.props.getData}
                  cards={this.props.cards}
                  currentUser={this.props.currentUser}
                  setUser={this.props.setUser}
                  updateUser={this.props.updateUser}
                  isAuthenticated={this.props.isAuthenticated}
                  {...props}
                />
              );
            } else {
              return <App />;
            }
          }}
        />
        {/* <Route
          exact
          path="/search"
          render={props => {
            console.log("searchForCards", this.props.user);
            if (this.props.user) {
              return (
                <SearchForCard
                  key={this.props.currentUser}
                  getData={this.getData}
                  cards={this.state.cards}
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
        /> */}
        <Route
          exact
          path="/collection/:userId(\d+)"
          render={props => {
            console.log("user", this.props.user);
            if (this.props.user) {
              return (
                <CardList
                updateCardLists={this.props.updateCardLists}
                  getFavorites={this.props.getFavorites}
                  favCards={this.props.favCards}
                  key={this.props.currentUser}
                  getData={this.props.getData}
                  user={this.props.user}
                  cards={this.props.cards}
                  currentUser={this.props.currentUser}
                  setUser={this.props.setUser}
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
          path="/profile/:userId(\d+)"
          render={props => {
            console.log("at profile", this.props.user);
            return (
              <ProfileList
                getFavorites={this.props.getFavorites}
                favCards={this.props.favCards}
                key={this.props.currentUser}
                getData={this.props.getData}
                user={this.props.user}
                cards={this.props.cards}
                currentUser={this.props.currentUser}
                setUser={this.props.setUser}
                {...props}
              />
            );
          }}
        />
      </>
    );
  }
}
