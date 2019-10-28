import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Input,
  Label
} from "reactstrap";
import APIManager from "../../Modules/APIManager";

export default class UserCard extends Component {
  state = {
    condition: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

//   newCardCondition() {
//       console.log("runnnnnnnnn")
//     return (
//       <>
//         <Label>Card Condition</Label>
//         <Input
//           className="conditonInput"
//           id="condition"
//           onChange={this.handleFieldChange}
//         ></Input>
//         <Button onClick={() => this.props.addCard(card)}>Add</Button>
//       </>
//     );
//   }

  toggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };

  render() {
    if (this.props.card.playerName.startsWith(this.props.search)) {
      console.log(this.props.card.playerName);
      return (
        <>
          <div>
            <Card>
              <CardTitle>{this.props.card.name}</CardTitle>
              <CardImg
                top
                width="100%"
                src={this.props.card.frontImage}
                alt="Card image cap"
              />
              <Button
                // type="submit"
                onClick={() => this.props.addCard(this.props.card)}
              >
                Add
              </Button>
              {/* <Label isOpen={this.toggle} toggle={this.state.toggle}>Card Condition</Label>
              <Input
                className="conditonInput hidden"
                id="condition"
                onChange={this.handleFieldChange}
              ></Input>
              <Button className="hidden" toggle={this.state.toggle} onClick={() => this.addCard()}>Add</Button> */}
              <Button>Card Details</Button>
            </Card>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}
