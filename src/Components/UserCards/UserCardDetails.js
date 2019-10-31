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
import "../MyCards/CardDetails.css";
import EditCard from "../MyCards/CardEdit"

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
    if (this.props.currentUser === this.props.card.userId) {
      return (
        <>
          <Button
            color="primary"
            onClick={this.toggle}
          >
            Details
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className="class!"
          >
            <ModalHeader toggle={this.toggle}>
              {this.props.card.playerName}
            </ModalHeader>
            <ModalBody>
              <Card className="flexHomeCardDetails">
                <CardImg
                  className="cardDetailImg"
                  top
                  width="100%"
                  src={this.props.card.frontImage}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle>
                    Position: {this.props.card.playerPosition}
                  </CardSubtitle>
                  <br></br>
                  <CardSubtitle>
                    Team: {this.props.card.cardTeam}
                  </CardSubtitle>
                  <br></br>
                  <CardText>Year: {this.props.card.cardYear}</CardText>
                  <CardText>Brand: {this.props.card.cardBrand}</CardText>
                </CardBody>
              </Card>
            </ModalBody>
            <ModalFooter>
            {/* <EditCard
                card={this.props.card}
                key={this.props.card.id}
                getFavorites={this.props.getFavorites}
                favCards={this.props.favCards}
                addCard={this.props.addCard}
                deleteCard={this.props.deleteCard}
                getData={this.props.getData}
                currentUser={this.props.currentUser}
                {...this.props}
              /> */}
              <Button
                color="warning"
                className="cardDetailButton"
                onClick={() => this.props.addCard(this.props.card), this.toggle}
              >
                Add
              </Button>
              <Button color="danger" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </>
      );
    } else {
      return (
        <>
          <Button
            className="myCardButtons"
            color="primary"
            onClick={this.toggle}
          >
            Details
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className="class!"
          >
            <ModalHeader toggle={this.toggle}>
              {this.props.card.playerName}
            </ModalHeader>
            <ModalBody>
              <Card className="flexHomeCardDetails">
                <CardImg
                  className="cardDetailImg"
                  top
                  width="100%"
                  src={this.props.card.frontImage}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle>
                    Position: {this.props.card.playerPosition}
                  </CardSubtitle>
                  <br></br>
                  <CardSubtitle>
                    Team: {this.props.card.cardTeam}
                  </CardSubtitle>
                  <br></br>
                  <CardText>Year: {this.props.card.cardYear}</CardText>
                  <CardText>Brand: {this.props.card.cardBrand}</CardText>
                </CardBody>
              </Card>
            </ModalBody>
            <ModalFooter>
              <Button
                className="cardDetailButton"
                onClick={() => this.props.addCard(this.props.card.id)}
              >
                Add
              </Button>
              <Button color="danger" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </>
      );
    }
  }
}
