import React, { Component } from "react";
import EditCard from "./CardEdit";
// import { Card, CardTitle, CardText } from "reactstrap";
import {
  Card,
  Button,
  CardImg,
  ButtonGroup,
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
          <CardFooter className="cardButton">
            <div className="buttonGroup">
              <Button
                className="myCardButtons"
                onClick={() => this.addToFavorites()}
              >
                Favorite
              </Button>
              <Button
                className="myCardButtons"
                onClick={() => this.props.deleteCard(this.props.card.id)}
              >
                Delete
              </Button>
            </div>
            <div className="buttonGroup">
              <CardDetials
                key={`${this.props.currentUser}-user`}
                addCard={this.props.addCard}
                deleteCard={this.props.deleteCard}
                getData={this.props.getData}
                currentUser={this.props.currentUser}
                {...this.props}
              />
              <EditCard
                card={this.props.card}
                key={this.props.card.id}
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
