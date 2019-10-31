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
    cardYear: "",
    cardTeam: "",
    condition: "",
    sport: "",
    frontPic: "",
    backPic: "",
    modal: false
  };

  // getData() {
  //   APIManager.getExpandedItems(
  //     "userCards",
  //     "user",
  //     this.props.currentUser,
  //     "card"
  //   )
  //     .then(cards => {
  //       console.log("hereeeee", cards);
  //       this.setState({
  //         cards: cards
  //       });
  //     })
  //     .then(() => console.log("cards", this.state.cards));
  // }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
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
      cardYear: this.state.cardYear,
      cardTeam: this.state.cardTeam,
      sport: this.state.sport,
      frontImage: `/${frontImgValue}`,
      backImage: `/${backImgValue}`,
      userId: this.props.currentUser
    };
    APIManager.post("cards", newCard).then(newCard => {
      // console.log(this.state.conditon);
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
        cardId: JSON.stringify(newCard.id),
        condition: this.state.condition,
        favorited: false,
        timestamp: dateNow,
        wanted: false
      };
      APIManager.post("userCards", newUserCard)
        .then(() => {
          this.setState({
            modal: false
          })
          this.props.getData()
        })
      })
  };


  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
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
                <Label>Card Brand:</Label>
                <Input
                  onChange={this.handleFieldChange}
                  type="text"
                  id="cardBrand"
                  placeholder="Card Brand"
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
            <Button color="primary" type="submit" onClick={() => this.addCard()}>
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
