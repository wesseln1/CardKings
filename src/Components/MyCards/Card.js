import React, { Component } from "react";
import EditCard from "./CardEdit";
// import { Card, CardTitle, CardText } from "reactstrap";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  ButtonGroup,
  CardFooter,
  // CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";
import ReactStars from "react-stars";
import "./Card.css";
import CardDetials from "./CardDetails";
import Rating from "react-rating"
import APIManager from "../../Modules/APIManager";
import "./Card.css"

export default class ViewCards extends Component {



  updateCondition = () => {
    let newCondition = {
      condition: this.state.condition
    }
    APIManager.patch("userCards", this.props.card.id, newCondition)
  }


  // handleFieldChange = evt => {
    
  //   console.log("changing", evt)
  //   const stateToChange = {};
  //   stateToChange[evt.target.id] = evt.target.value;
  //   this.setState(stateToChange);
  // };

  addToFavorites() {
    console.log(this.props.card.id);
    APIManager.get("userCards", this.props.card.id).then(card => {
      // console.log("card", card);
      let favorited = card.favorited;
      let newCard = {
        favorited: favorited ? false : true
      };
      APIManager.patch("userCards", card.id, newCard).then(() => {
        this.props.getFavorites();
      });
    });
  }

  componentDidMount(){
    console.log(this.props.card.condition)
  }

  render() {
    return (
      <>
        <Card className="flexHomeCard">
          <h6 className="cardPlayerName">{this.props.card.card.playerName}</h6>
          <CardImg
            top
            width="100%"
            src={this.props.card.card.frontImage}
            alt="Card image cap"
          />
          <CardFooter className="cardButton">
            <Rating id="condition" initialRating={this.props.card.condition} onClick={(evt) => this.setCondition(evt)}/>
            <div className="buttonGroup">
              <Button
                className="myCardButtons"
                onClick={() => this.addToFavorites()}
              >
                Favorite
              </Button>
              <Button
                className="myCardButtons"
                onClick={() => this.props.deleteCard(this.props.card.id)}
              >
                Delete
              </Button>
            </div>
            <div className="buttonGroup">
              <CardDetials
                key={`${this.props.currentUser}-user`}
                addToFavorites={this.addToFavorites}
                addCard={this.props.addCard}
                deleteCard={this.props.deleteCard}
                getData={this.props.getData}
                currentUser={this.props.currentUser}
                {...this.props}
              />
              <EditCard
                mycard={this.props.card}
                key={this.props.card.id}
                getFavorites={this.props.getFavorites}
                favCards={this.props.favCards}
                addCard={this.props.addCard}
                deleteCard={this.props.deleteCard}
                getData={this.props.getData}
                currentUser={this.props.currentUser}
                {...this.props}
              />
            </div>
          </CardFooter>
        </Card>
      </>
    );
  }
}
