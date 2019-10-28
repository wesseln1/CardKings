import React, { Component } from "react";
import { Redirect } from "react-router-dom"
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
      this.getUser()
  }

  render() {
    return (
      <>
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
                  setUser={this.props.setUser}
                  updateUser={this.props.updateUser}
                  // cards={this.state.cards}
                  getData={this.props.getData}
                  currentUser={this.state.currentUser}
                  {...this.props}
                />
              </Card>
            </div>
            <div>
              {/* <h3>Favorites</h3> */}
              <CardDeck>
                <Card>
                  <>
                    <FavoriteCardList
                      key={this.state.currentUser}
                      user={this.props.user}
                      getData={this.props.getData}
                      updateUser={this.props.updateUser}
                      currentUser={this.state.currentUser}
                      setUser={this.props.setUser}
                      {...this.props}
                    />
                  </>
                </Card>
              </CardDeck>
            </div>
            <div>
              <CardTitle>Collection</CardTitle>
              <CardDeck className="userCardHomeDeck">
                <CardList
                  key={this.state.currentUser}
                  cards={this.props.cards}
                  user={this.props.user}
                  getData={this.props.getData}
                  updateUser={this.props.updateUser}
                  currentUser={this.state.currentUser}
                  setUser={this.props.setUser}
                />
              </CardDeck>
            </div>
          </>
      </>
    );
  }
}
