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

  render() {
    return (
      <div>
        <Card>
          <CardForm
            key={this.props.currentUser}
            getData={this.getData}
            currentUser={this.props.currentUser}
            {...this.props}
          />
        </Card>
        <CardDeck className="userCardFlex">
          <>
            {this.state.cards.map(card => (
              <ViewCards
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
