import React, { Component } from "react";
import { Card, CardTitle, CardText, CardImg, CardDeck } from "reactstrap";
import APIManager from "../../Modules/APIManager";
import App from "../../App";
import "./Home.css";
import "../MyCards/Card.css";
import CardList from "../MyCards/CardList";
import CardForm from "../MyCards/NewCardForm"

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
    console.log("at get", user);
    APIManager.get("collectorLevels", user.collectorLevel).then(level =>
      //   console.log("hayy", level),
      this.setState({
        user: user,
        collectorLevel: level,
        currentUser: this.props.currentUser
      })
    );
  }

  componentDidMount() {
    console.log(this.props.currentUser);
    this.getUser();
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
                  key={this.props.currentUser}
                  addCard={this.addCard}
                  getData={this.getData}
                  currentUser={this.props.currentUser}
                  {...this.props}
                />
              </Card>
            </div>
            <div>
              <CardDeck className="userCardHomeDeck">
                <CardList
                  key={this.props.currentUser}
                  user={this.props.user}
                  currentUser={this.props.currentUser}
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
