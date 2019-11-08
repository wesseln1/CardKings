/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState, Component } from "react";
import { Redirect } from "react-router-dom";
import EditCard from "./Card"
import "./CardDetails.css"
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
    modal: false,
    cardImg: ""
  };

  imgToggle = () => {
    if(this.state.cardImg === this.props.card.card.frontImage){
      return this.setState({
        cardImg: this.props.card.card.backImage
      })
    } else {
      return this.setState({
        cardImg: this.props.card.card.frontImage
      })
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

componentDidMount () {
  this.imgToggle()
}

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
          className="modalDetails"
        >
          <ModalHeader className="modalHeader" toggle={this.toggle}>
            {this.props.card.card.playerName}
          </ModalHeader>
          <ModalBody className="modalBody">
            <Card className="flexHomeCard">
              <CardImg
              className="cardDetailImg"
                top
                src={this.state.cardImg}
                alt="Card image cap"
              />
              <Button onClick={() => this.imgToggle()}>View Back</Button>
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
          <ModalFooter className="modalFooter">
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
