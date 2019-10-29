import React, { Component } from "react";
import { Link } from "react-router-dom";
import ViewCards from "./Card";
import { CardDeck, Card, Button, CardTitle } from "reactstrap";
import APIManager from "../../Modules/APIManager";
import CardForm from "./NewCardForm";

export default class FavoriteCardList extends Component {
  state = {
    cards: []
  };

  addToFavorites() {
    APIManager.getFavoritedCards("userCards", this.props.card.card.id).then(
      card => {
        console.log("card", card);
        let favorited = card.favorited;
        let newCard = {
          favorited: favorited ? false : true
        };
        APIManager.patch("userCards", card.id, newCard).then(() => {
          this.props.getFavorites();
        });
      }
    );
  }

  componentDidMount() {
    this.props.getFavorites();
  }

  render() {
    return (
      <div className="cardDiv">
        <CardTitle>Favorites</CardTitle>
        <CardDeck className="userCardFlex">
          <div>
            {this.props.favCards.map(card => (
              <ViewCards
                addToFavorites={this.addToFavorites}
                key={card.id}
                updateUser={this.props.updateUser}
                currentUser={this.props.currentUser}
                card={card}
                {...this.props}
              />
            ))}
          </div>
        </CardDeck>
      </div>
    );
  }
}
