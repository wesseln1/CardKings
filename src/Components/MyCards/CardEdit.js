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
  Input,
  CardImg, 
  CardTitle,
  CardText
} from "reactstrap";

export default class EditCard extends Component {
  state = {
    card: "",
    playerName: "",
    playerPosition: "",
    cardBrand: "",
    cardYear: "",
    cardTeam: "",
    sport: "",
    frontPic: "",
    backPic: "",
    authorUsername: "",
    authorCollectorLevelId: "",
    authorFavTeam: "",
    collectorLevel: "",
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
    APIManager.patch("cards", this.state.card.id, newCard).then(() => {
      this.setState(
        {
          modal: false
        },
        this.props.getData(),
        this.props.getFavorites(),
        this.getAuthors()
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

  getCollectorLevel = (userId) => {
    APIManager.get("collectorLevels", userId).then(levels =>{
        this.setState({
          collectorLevel: levels
        }
        )
      });
  }

  viewAuthors = (card) => {
    APIManager.get("users", card).then(user => {
      this.setState({
        authorUsername: user.username,
        authorCollectorLevelId: user.collectorLevelId,
        authorFavTeam: user.favTeam,
        authorProfilePic: user.profilePic
      },
      this.getCollectorLevel(user.collectorLevel)
      )
    });
  };

  getAuthors = () => {
    APIManager.getCardsByAuthor(
      "cards",
      this.props.card.card.id,
      this.props.card.userId
    ).then(card => {
      this.setState(
        {
          card: card,
          playerName: card.playerName,
          playerPosition: card.playerPosition,
          cardBrand: card.cardBrand,
          cardYear: card.cardYear,
          cardTeam: card.cardTeam,
          sport: card.sport,
          frontPic: card.frontImage,
          backPic: card.backImage,
        },
        this.viewAuthors(card.userId))
    });
  };

  componentDidMount() {
    this.getAuthors();
  }

  render() {
    if (this.state.card.userId === this.props.currentUser) {
      return (
        <>
          <Button
          color="warning"
            className="myCardButtons"
            onClick={this.toggle}
          >
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
              <Button style={{backgroundColor: '#BF8B4B'}} className="colorBtn" onClick={this.updateCard}>
                Update
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
            onClick={this.toggle}
          >
            Author
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className="class!"
          >
            <ModalHeader toggle={this.toggle}></ModalHeader>
            <ModalBody>
              <Card className="flexHomeCardDetails">
                <CardBody>
                  <CardImg src={this.state.authorProfilePic} />
                  <CardTitle>Author: {this.state.authorUsername}</CardTitle>
                  <CardText>Favorite Team: {this.state.authorFavTeam}</CardText>
                  <CardText>Collector Level: {this.state.collectorLevel.level}</CardText>
                </CardBody>
              </Card>
            </ModalBody>
            <ModalFooter>
              <Button color="danger">
                View Collection
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
