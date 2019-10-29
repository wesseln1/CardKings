import React, { Component } from "react";
import APIManager from "../../Modules/APIManager";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  Input
} from "reactstrap";

export default class EditCard extends Component {
  state = {
    card: "",
    playerName: this.props.card.card.playerName,
    playerPosition: this.props.card.card.playerPosition,
    cardBrand: this.props.card.card.cardBrand,
    cardYear: this.props.card.card.cardYear,
    cardTeam: this.props.card.card.cardTeam,
    sport: this.props.card.card.sport,
    frontPic: this.props.card.card.frontImage,
    backPic: this.props.card.card.backImage,
    modal: false
  };

  updateCard = () => {
    let frontImgValue = this.state.frontPic.replace(
      "C:\\fakepath\\",
      "/images/"
    );
    let backImgValue = this.state.backPic.replace("C:\\fakepath\\", "images/");
    let newCard = {
      playerName: this.state.playerName,
      playerPosition: this.state.playerPosition,
      cardBrand: this.state.cardBrand,
      cardYear: this.state.cardYear,
      cardTeam: this.state.cardTeam,
      sport: this.state.sport,
      frontImage: `${frontImgValue}`,
      backImage: `${backImgValue}`,
      userId: this.props.currentUser
    };
    console.log("new card", newCard);
    APIManager.patch("cards", this.state.card.id, newCard).then(() => {
      this.setState(
        {
          modal: false
        },this.props.getData()
      );
    });
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  getAuthors = () => {
    APIManager.getCardsByAuthor(
      "cards",
      this.props.card.card.id,
      this.props.card.userId
    ).then(card => {
      console.log("heyyoo", card);
      this.setState({ card: card });
    });
  };

  componentDidMount() {
    this.getAuthors();
  }

  render() {
    return (
      <>
        <Button className="myCardButtons" color="primary" onClick={this.toggle}>
          Edit
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="class!"
        >
          <ModalHeader toggle={this.toggle}>
            {this.state.card.playerName}
          </ModalHeader>
          <ModalBody>
            <Card className="flexHomeCardDetails">
              {/* <CardImg
                className="cardDetailImg"
                top
                width="100%"
                src={this.state.card.frontImage}
                alt="Card image cap"
              /> */}
              <CardBody>
                <br></br>
                <Input
                  type="text"
                  id="playerName"
                  onChange={this.handleFieldChange}
                  defaultValue={this.state.card.playerName}
                />
                <Input
                  type="text"
                  id="cardTeam"
                  onChange={this.handleFieldChange}
                  defaultValue={this.state.card.cardTeam}
                />
                <Input
                  type="text"
                  id="playerPosition"
                  onChange={this.handleFieldChange}
                  defaultValue={this.state.card.playerPosition}
                />
                <Input
                  type="text"
                  id="cardBrand"
                  onChange={this.handleFieldChange}
                  defaultValue={this.state.card.cardBrand}
                />
                <Input
                  type="text"
                  id="cardYear"
                  onChange={this.handleFieldChange}
                  defaultValue={this.state.card.cardYear}
                />
                <Input
                  type="text"
                  id="sport"
                  onChange={this.handleFieldChange}
                  defaultValue={this.state.card.sport}
                />
                <Input
                  type="file"
                  id="frontImage"
                  onChange={this.handleFieldChange}
                />
                <Input
                  type="file"
                  id="backImage"
                  onChange={this.handleFieldChange}
                />

                {/* <CardText>Conditon: {this.props.card.condition}</CardText> */}
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.updateCard}>
              Update
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
