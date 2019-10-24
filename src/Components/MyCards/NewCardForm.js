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
    condition: "",
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

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
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
                <Label>Card Comdition:</Label>
                <Input
                  onChange={this.handleFieldChange}
                  type="text"
                  id="condition"
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
            <Button color="primary" type="submit" onClick={() => this.props.addCard()}>
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
