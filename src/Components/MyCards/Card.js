import React, { Component } from "react";
// import { Card, CardTitle, CardText } from "reactstrap";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardFooter,
  // CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";
import ReactStars from "react-stars";
import "./Card.css";
import CardDetials from "./CardDetails";
import APIManager from "../../Modules/APIManager";

export default class ViewCards extends Component {
  editCard = () => {
    APIManager.get("userCards", this.props.card.id).then(card => {});
  };

  addToFavorites() {
    console.log(this.props.card.id);
    APIManager.get("userCards", this.props.card.id).then(card => {
      // console.log("card", card);
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
        <Card className="flexHomeCard">
          <CardImg
            top
            width="100%"
            src={this.props.card.card.frontImage}
            alt="Card image cap"
          />
          <CardFooter className="cardButtons">
            <CardDetials
              key={this.props.currentUser}
              addCard={this.props.addCard}
              getData={this.props.getData}
              currentUser={this.props.currentUser}
              {...this.props}
            />
            <Button
              className="myCardButtons"
              onClick={() => this.props.deleteCard(this.props.card.id)}
            >
              Delete
            </Button>
            <Button
              className="myCardButtons"
              onClick={() => this.addToFavorites()}
            >
              Favorite
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  }
}
