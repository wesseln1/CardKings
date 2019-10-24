import React, { Component } from "react";
import { Link } from "react-router-dom";
import ViewCards from "./Card";
import { CardDeck, Card, Button } from "reactstrap";
import APIManager from "../../Modules/APIManager";
import CardForm from "./NewCardForm";
import "./Card.css";

export default class CardList extends Component {
  state = {
    cards: []
  };

  getData() {
    APIManager.getExpandedItems(
      "userCards",
      "user",
      this.props.currentUser,
      "card"
    )
      .then(cards => {
        console.log("hereeeee", cards);
        this.setState({
          cards: cards
        });
      })
      .then(() => console.log("cards", this.state.cards));
  }

  componentDidMount() {
    this.getData();
  }

  addCard = () => {
    let frontImgValue = this.state.frontPic.replace(
      "C:\\fakepath\\",
      "images/"
    );
    let backImgValue = this.state.backPic.replace("C:\\fakepath\\", "images/");
    let newCard = {
      playerName: this.state.playerName,
      playerPosition: this.state.playerPosition,
      cardBrand: this.state.cardBrand,
      cardNumber: this.state.cardNumber,
      cardYear: this.state.cardYear,
      cardTeam: this.state.cardTeam,
      sport: this.state.sport,
      frontImage: frontImgValue,
      backImage: backImgValue,
      userId: this.props.currentUser
    };
    APIManager.post("cards", newCard).then(newCard => {
      // console.log(this.state.conditon);
      let timestamp = Date.now();
      let dateNow = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }).format(timestamp);
      let newUserCard = {
        userId: parseInt(this.props.currentUser),
        cardId: newCard.id,
        condition: this.state.condition,
        favorited: false,
        timestamp: dateNow,
        wanted: false
      };
      APIManager.post("userCards", newUserCard)
        .then(() =>
          this.setState({
            modal: false
          })
        )
        .then(this.props.history.push("/"));
    });
  };

  render() {
    return (
      <div className="cardDiv">
        <CardDeck className="userCardFlex">
          <>
            {this.state.cards.map(card => (
              <ViewCards
                addCard={this.addCard}
                key={card.id}
                currentUser={this.props.currentUser}
                card={card}
                {...this.props}
              />
            ))}
          </>
        </CardDeck>
      </div>
    );
  }
}
