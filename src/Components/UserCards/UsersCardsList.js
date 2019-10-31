import React, { Component } from "react";
import "./UserCard.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card
} from "reactstrap";
import UserCard from "./UsersCards";
import APIManager from "../../Modules/APIManager";
export default class UserCardList extends Component {
  state = {
    cards: [],
    modal: false
  };

  addCard = card => {
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
      userId: sessionStorage.getItem("credentials"),
      cardId: JSON.stringify(card.id),
      favorited: false,
      timestamp: dateNow,
      wanted: false
    };
    console.log("newusercard", newUserCard);
    APIManager.post("userCards", newUserCard).then(() => {
      this.setState({
        modal: false
      },
      this.props.getData(),
      this.props.getFavorites()
      );
    });
  };

  deleteCard = id => {
    APIManager.delete("userCards", id).then(() => {
      this.props.getData();
      this.props.getFavorites();
    });
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  getData = () => {
    APIManager.searchCards().then(cards => {
      this.setState({
        cards: cards
      });
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Search</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="class!"
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            {this.state.cards.map(card => (
              <UserCard
                addCard={this.addCard}
                deleteCard={this.deleteCard}
                getData={this.props.getData}
                currentUser={this.props.currentUser}
                key={card.id}
                card={card}
                search={this.props.search}
                {...this.props}
              />
            ))}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
