import React, { Component } from "react";
import ViewCards from "./Card";
import { CardDeck } from "reactstrap";
import APIManager from "../../Modules/APIManager";

export default class CardList extends Component {
  state = {
    cards: []
    // currentUser: ""
  };

  getData() {
    APIManager.getCards("cards", this.props.currentUser).then(cards => {
      console.log("hereeeee",cards);
      this.setState({
        cards: cards
      });
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <CardDeck>
          <>
            {this.state.cards.map(card => 
              <ViewCards
                key={card.id}
                currentUser={this.props.currentUser}
                card={card}
                {...this.props}
              />
            )}
          </>
        </CardDeck>
      </div>
    );
  }
}
