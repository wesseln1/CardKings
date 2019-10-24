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
import "./Card.css";
import CardDetials from "./CardDetails";

export default class ViewCards extends Component {
  render() {
    console.log(this.props.card);
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
            <Button className="myCardButtons">Favorite</Button>
          </CardFooter>
        </Card>
      </>
    );
  }
}
