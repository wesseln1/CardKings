/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState, Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardImg
} from "reactstrap";
import APIManager from "../../Modules/APIManager";

export default class CardDetails extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <>
        <Button className="myCardButtons" color="primary" onClick={this.toggle}>
          Details
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="class!"
        >
          <ModalHeader toggle={this.toggle}>
            {this.props.card.card.playerName}
          </ModalHeader>
          <ModalBody>
            <Card className="flexHomeCard">
              <CardImg
                top
                width="100%"
                src={this.props.card.card.frontImage}
                alt="Card image cap"
              />
              <CardBody>
                <CardSubtitle>
                  Position: {this.props.card.card.playerPosition}
                </CardSubtitle>
                <br></br>
                <CardSubtitle>
                  Team: {this.props.card.card.cardTeam}
                </CardSubtitle>
                <br></br>
                <CardText>Year: {this.props.card.card.cardYear}</CardText>
                <CardText>Brand: {this.props.card.card.cardBrand}</CardText>
                <CardText>Conditon: {this.props.card.condition}</CardText>
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              onClick={() => this.addCard()}
            >
              Do Something
            </Button>
            <Button color="warning" className="cardDetailButton">Delete</Button>
            <Button color="danger" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
