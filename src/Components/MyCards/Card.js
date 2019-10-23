import React, { Component } from "react";
// import { Card, CardTitle, CardText } from "reactstrap";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  // CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";
import "./Card.css"

export default class ViewCards extends Component {
  render() {
      console.log(this.props.card)
    return (
      <>
        <Card>
          <CardImg
            top
            width="100%"
            src={this.props.card.card.frontImage}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.card.card.playerName}</CardTitle>
            <CardSubtitle>{this.props.card.card.playerPosition}</CardSubtitle>
            <CardSubtitle>{this.props.card.card.cardTeam}</CardSubtitle>
            <CardText>Year: {this.props.card.card.cardYear}
            </CardText>
            <CardText>Brand: {this.props.card.card.cardBrand}
            </CardText>
            <CardText>Conditon: {this.props.card.condition}
            </CardText>
            <Button className="cardButton">Card Details</Button>
          </CardBody>
        </Card>
      </>
    );
  }
}
