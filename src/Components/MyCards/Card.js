import React, { Component } from "react";
// import { Card, CardTitle, CardText } from "reactstrap";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";

export default class ViewCards extends Component {
  render() {
      console.log(this.props.card)
    return (
      <>
        <Card>
          <CardImg
            top
            width="100%"
            src={this.props.card.frontImage}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.card.playerName}</CardTitle>
            <CardSubtitle>{this.props.card.cardTeam}</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </>
    );
  }
}
