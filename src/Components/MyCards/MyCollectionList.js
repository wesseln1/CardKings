import React, { Component } from "react";
import "./Card.css";
import { CardGroup } from "reactstrap";
import APIManager from "../../Modules/APIManager";
import MyCollectionCards from "./MyCollectionCard";
import "./MyCollection.css"

export default class MyCollectionList extends Component {
  state = {
    cards: []
  };

  deleteCard = id => {
    APIManager.delete("userCards", id).then(() => {
      this.props.getData();
      this.props.getFavorites();
    });
  };

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
      frontImage: `/${frontImgValue}`,
      backImage: `/${backImgValue}`,
      userId: this.props.currentUser
    };
    APIManager.post("cards", newCard).then(newCard => {
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
        favorited: false,
        timestamp: dateNow,
        wanted: false
      };
      APIManager.post("userCards", newUserCard)
        .then(() => {
          this.setState({
            modal: false
          });
        })
        .then(() => {
          this.props.getData();
          this.props.getFavorites();
        });
    });
  };

  render() {
    return (
      <div className="myCardDiv">
        <CardGroup className="myCollectionCardFlex">
          <>
            {this.props.cards.map(card => (
              <MyCollectionCards
                getFavorites={this.props.getFavorites}
                favCards={this.props.favCards}
                deleteCard={this.deleteCard}
                addCard={this.addCard}
                key={card.id}
                updateUser={this.props.updateUser}
                setUser={this.props.setUser}
                currentUser={this.props.currentUser}
                card={card}
                {...this.props}
              />
            ))}
          </>
        </CardGroup>
      </div>
    );
  }
}
