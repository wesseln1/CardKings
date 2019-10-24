import React, { Component } from "react";
import { Card, CardTitle, CardText, CardImg, CardDeck } from "reactstrap";
import APIManager from "../../Modules/APIManager";
import App from "../../App";
import "./Home.css";
import "../MyCards/Card.css";
import "../MyCards/Card.css";
import CardList from "../MyCards/CardList";
import CardForm from "../MyCards/NewCardForm"

export default class Home extends Component {
  state = {
    user: "",
    currentUser: "",
    collectorLevel: {},
    // cards: []
  };

  getUser() {
    // let currentUser = this.props.currentUser;
    APIManager.getUserById(this.props.currentUser).then(user => {
      this.getCollectorLevel(user);
    })
  }

  getCollectorLevel(user) {
    APIManager.get("collectorLevels", user.collectorLevel).then(level =>
      this.setState({
        user: user,
        collectorLevel: level,
        currentUser: user.id
      })
    ).then(() => this.props.getData())
  }

  componentDidMount() {
    console.log(this.state.currentUser);
    this.getUser()
  }

  render() {
    return (
      <>
        {this.props.isAuthenticated ? (
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
                  // cards={this.state.cards}
                  getData={this.props.getData}
                  currentUser={this.state.currentUser}
                  {...this.props}
                />
              </Card>
            </div>
            <div>
              <CardDeck className="userCardHomeDeck">
                <CardList
                  key={this.state.currentUser}
                  cards={this.props.cards}
                  user={this.props.user}
                  getData={this.props.getData}
                  currentUser={this.state.currentUser}
                  setUser={this.props.setUser}
                />
              </CardDeck>
            </div>
          </>
        ) : (
          <App />
        )}
      </>
    );
  }
}
