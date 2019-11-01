/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState, Component } from "react";
import { Redirect } from "react-router-dom";
import EditCard from "./Card"
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
import "./CardDetails.css"

export default class CardDetails extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  // editCard = (card) => {
  //   unEditedCard = {
      
  //   }
  // }

  render() {
    return (
      <>
        <Button className="myCardButtons colorBtn" onClick={this.toggle}>
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
            <Card className="flexHomeCardDetails">
              <CardImg
              className="cardDetailImg"
                top
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
            <Button color="warning" className="cardDetailButton" onClick={() => this.props.deleteCard(this.props.card.id)}>Delete</Button>
            <Button color="danger" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
