/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState, Component } from "react";
import { Redirect } from "react-router-dom"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import APIManager from "../../Modules/APIManager";

export default class CardForm extends Component {
  state = {
    playerName: "",
    playerPosition: "",
    cardBrand: "",
    cardNumber: "",
    cardYear: "",
    cardTeam: "",
    conditon: "",
    sport: "",
    frontPic: "",
    backPic: "",
    modal: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  addCard = () => {
    let frontImgValue = this.state.frontPic.replace(
      "C:\\fakepath\\",
      "images/"
    );
    let backImgValue = this.state.backPic.replace("C:\\fakepath\\", "images/");
    let newCard = {
      playerName: this.state.playerName,
      playerPosition: this.state.playerPosition,
      cardBrand: this.state.cardBrand,
      cardNumber: this.state.cardNumber,
      cardYear: this.state.cardYear,
      cardTeam: this.state.cardTeam,
      sport: this.state.sport,
      frontImage: frontImgValue,
      backImage: backImgValue,
      userId: this.props.currentUser
    };
    APIManager.post("cards", newCard).then(newCard => {
      console.log(newCard);
      let timestamp = Date.now();
      let dateNow = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }).format(timestamp);
      let newUserCard = {
        userId: this.props.currentUser,
        cardId: parseInt(newCard.id),
        condition: parseInt(this.state.condition),
        favorited: false,
        timestamp: dateNow,
        wanted: false
      };
      APIManager.post("userCards", newUserCard)
      .then(() => this.setState({
          modal: false
      }))
    });
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Add New Card
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="class!"
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Player Name:</Label>
                <Input
                  onChange={this.handleFieldChange}
                  type="text"
                  id="playerName"
                  placeholder="Name"
                ></Input>
                <Label>Player Position:</Label>
                <Input
                  onChange={this.handleFieldChange}
                  type="text"
                  id="playerPosition"
                  placeholder="Position"
                ></Input>
                <Label>Card Team:</Label>
                <Input
                  onChange={this.handleFieldChange}
                  type="text"
                  id="cardTeam"
                  placeholder="Team"
                ></Input>
                <Label>Card Year:</Label>
                <Input
                  onChange={this.handleFieldChange}
                  type="text"
                  id="cardYear"
                  placeholder="Year"
                ></Input>
                <Label>Card Number:</Label>
                <Input
                  onChange={this.handleFieldChange}
                  type="text"
                  id="cardNumber"
                  placeholder="Card Number"
                ></Input>
                <Label>Card Brand:</Label>
                <Input
                  onChange={this.handleFieldChange}
                  type="text"
                  id="cardBrand"
                  placeholder="Card Brand"
                ></Input>
                <Label>Card Comditon:</Label>
                <Input
                  onChange={this.handleFieldChange}
                  type="text"
                  id="conditon"
                  placeholder="Card Conditon"
                ></Input>
                <Label>Sport:</Label>
                <Input
                  onChange={this.handleFieldChange}
                  type="text"
                  id="sport"
                  placeholder="Sport"
                ></Input>
                <Label>Front Picture</Label>
                <Input
                  onChange={this.handleFieldChange}
                  type="file"
                  id="frontPic"
                ></Input>
                <Label>Back Picture</Label>
                <Input
                  onChange={this.handleFieldChange}
                  type="file"
                  id="backPic"
                ></Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={this.addCard}>
              Do Something
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
// export default CardForm
