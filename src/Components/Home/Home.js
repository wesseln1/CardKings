import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Card, CardTitle, CardText, CardImg, CardDeck } from "reactstrap";
import APIManager from "../../Modules/APIManager";
import App from "../../App";
import "./Home.css";
import "../MyCards/Card.css";
import "../MyCards/Card.css";
import CardList from "../MyCards/CardList";
import CardForm from "../MyCards/NewCardForm";
import FavoriteCardList from "../MyCards/MyFavoritesList";

export default class Home extends Component {
  state = {
    user: "",
    currentUser: "",
    collectorLevel: {}
  };

  getUser() {
    // let currentUser = this.props.currentUser;
    APIManager.getUserById(this.props.currentUser).then(user => {
      this.getCollectorLevel(user);
    });
  }

  getCollectorLevel(user) {
    APIManager.get("collectorLevels", user.collectorLevel)
      .then(level =>
        this.setState({
          user: user,
          collectorLevel: level,
          currentUser: user.id
        })
      )
      // .then(() => this.getFavorites(this.state.currentUser))
      .then(() => this.props.getData());
  }

  componentDidMount() {
    this.getUser();
    // this.props.getFavorites()
  }

  render() {
    console.log("here", this.props.favCards);
    return (
      <>
        <div className="backgroundDiv">
          <>
            <div className="profileDiv">
              <Card className="profileCard">
                <CardTitle>Welcome {this.state.user.firstName}!</CardTitle>
                <CardImg
                  className="profilePic"
                  src={require("./profile.png")}
                />
                <CardTitle>Username: {this.state.user.username}</CardTitle>
                <CardText>
                  Collector Level: {this.state.collectorLevel.level}
                </CardText>
              </Card>
              <Card className="addCardModalDiv">
                <CardForm
                  key={this.state.currentUser}
                  reRender={this.props.reRender}
                  updateCardLists={this.props.updateCardLists}
                  setUser={this.props.setUser}
                  updateUser={this.props.updateUser}
                  getFavorites={this.props.getFavorites}
                  // cards={this.state.cards}
                  getData={this.props.getData}
                  currentUser={this.state.currentUser}
                  {...this.props}
                />
              </Card>
            </div>
            <div>
              <CardTitle>Favorites</CardTitle>
              <CardDeck className="userCardHomeDeck">
                <FavoriteCardList
                  key={this.state.currentUser}
                  favCards={this.props.favCards}
                  reRender={this.props.reRender}
                  user={this.props.user}
                  cards={this.props.cards}
                  updateCardLists={this.props.updateCardLists}
                  getFavorites={this.props.getFavorites}
                  getData={this.props.getData}
                  updateUser={this.props.updateUser}
                  currentUser={this.state.currentUser}
                  setUser={this.props.setUser}
                  {...this.props}
                />
              </CardDeck>
            </div>
            <div>
              <CardTitle>Collection</CardTitle>
              <CardDeck className="userCardHomeDeck">
                <CardList
                  updateCardLists={this.props.updateCardLists}
                  key={this.state.currentUser}
                  reRender={this.props.reRender}
                  cards={this.props.cards}
                  getFavorites={this.props.getFavorites}
                  user={this.props.user}
                  getData={this.props.getData}
                  updateUser={this.props.updateUser}
                  currentUser={this.state.currentUser}
                  setUser={this.props.setUser}
                  {...this.props}
                />
              </CardDeck>
            </div>
          </>
        </div>
      </>
    );
  }
}
