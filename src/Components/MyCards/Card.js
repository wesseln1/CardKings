import React, { Component } from "react";
import EditCard from "./CardEdit";
import { Card, Button, CardImg, Label, CardFooter, CardTitle } from "reactstrap";
import CardDetials from "./CardDetails";
import Rating from "react-rating";
import APIManager from "../../Modules/APIManager";

export default class ViewCards extends Component {
  updateCondition = evt => {
    let newCondition = {
      condition: evt
    };
    APIManager.patch("userCards", this.props.card.id, newCondition).then(() => {
      this.props.getData()
      this.props.getFavorites()
    });
  };

  addToFavorites() {
    APIManager.get("userCards", this.props.card.id).then(card => {
      let favorited = card.favorited;
      let newCard = {
        favorited: favorited ? false : true
      };
      APIManager.patch("userCards", card.id, newCard).then(() => {
        this.props.getFavorites();
      });
    });
  }

  render() {
    return (
      <>
        <Card className="flexHomeCard homeCards">
          <CardTitle className="cardPlayerName">{this.props.card.card.playerName}</CardTitle>
          <CardImg
            className="cardImgDiv"
            top
            width="100%"
            src={this.props.card.card.frontImage}
            alt="Card image cap"
          />
          <CardFooter className="cardButton">
            <Label className="cardLabel">Card Condition:</Label>
            <Rating
              id="condition"
              initialRating={this.props.card.condition}
              onClick={evt => this.updateCondition(evt)}
            />
            <div className="buttonGroup">
              <Button
                className="myCardButtons colorBtn"
                onClick={() => this.addToFavorites()}
              >
                Favorite
              </Button>
              <Button
                color="danger"
                className="myCardButtons"
                onClick={() => this.props.deleteCard(this.props.card.id)}
              >
                Delete
              </Button>
            </div>
            <div className="buttonGroup">
              <CardDetials
                key={`${this.props.currentUser}-user`}
                addToFavorites={this.addToFavorites}
                addCard={this.props.addCard}
                deleteCard={this.props.deleteCard}
                getData={this.props.getData}
                currentUser={this.props.currentUser}
                {...this.props}
              />
              <EditCard
                mycard={this.props.card}
                key={this.props.card.id}
                getFavorites={this.props.getFavorites}
                favCards={this.props.favCards}
                addCard={this.props.addCard}
                deleteCard={this.props.deleteCard}
                getData={this.props.getData}
                currentUser={this.props.currentUser}
                {...this.props}
              />
            </div>
          </CardFooter>
        </Card>
      </>
    );
  }
}
