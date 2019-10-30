import React, { Component } from "react";
import { Link } from "react-router-dom";
import ViewCards from "./Card";
import { CardDeck, Card, Button, CardTitle } from "reactstrap";
import APIManager from "../../Modules/APIManager";
import CardForm from "./NewCardForm";
import "./Card.css";

export default class FavoriteCardList extends Component {
  state = {
    cards: [],
    // favCards: []
  };

  // getFavorites = () => {
  //   console.log(sessionStorage.getItem("credentials"))
  //   APIManager.getFavoritedCards(sessionStorage.getItem("credentials")).then(cards =>{
  //     this.setState({
  //       favCards: cards
  //     })
  //   });
  // } 

  deleteCard = id => {
    APIManager.delete("userCards", id).then(() => {
      this.props.getData();
      this.props.getFavorites();
    });
  };

  addToFavorites() {
    APIManager.getFavoritedCards("userCards", this.props.card.card.id).then(
      card => {
        let favorited = card.favorited;
        let newCard = {
          favorited: favorited ? false : true
        };
        APIManager.patch("userCards", card.id, newCard).then(() => this.props.getFavorites());
      }
    );
  }

  // componentDidMount() {
  //   console.log("fave cards", this.props.favCards)
  //   // this.props.getFavorites();
  // }

  render() {
    return (
      <div className="cardDiv">
        <CardTitle>Favorites</CardTitle>
        <CardDeck className="userCardFlex">
          <>
            {this.props.favCards.map(card => (
              <ViewCards
                getFavorites={this.props.getFavorites}
                deleteCard={this.deleteCard}
                favCards={this.props.favCards}
                addToFavorites={this.addToFavorites}
                key={card.id}
                updateUser={this.props.updateUser}
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
