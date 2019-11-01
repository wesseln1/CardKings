import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Input,
  Label
} from "reactstrap";
import APIManager from "../../Modules/APIManager";
import CardDetails from "./UserCardDetails";

export default class UserCard extends Component {
  state = {
    condition: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  toggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };

  render() {
    if (this.props.card.playerName.startsWith(this.props.search)) {
      return (
        <>
          <div>
            <Card>
              <CardTitle>{this.props.card.playerName}</CardTitle>
              <CardImg
                // top
                // width="100%"
                src={this.props.card.frontImage}
                alt="Card image cap"
              />
              <CardDetails
                card={this.props.card}
                key={this.props.card.id}
                getFavorites={this.props.getFavorites}
                favCards={this.props.favCards}
                addCard={this.props.addCard}
                deleteCard={this.props.deleteCard}
                getData={this.props.getData}
                currentUser={this.props.currentUser}
                {...this.props}
              />
              <Button
                className=""
                toggle={this.state.toggle}
                onClick={() => this.props.addCard(this.props.card)}
              >
                Add
              </Button>
            </Card>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}
