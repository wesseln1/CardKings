import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  CardLink,
  CardSubtitle,
  CardBody
} from "reactstrap";

export default class MyProfileCard extends Component {
  componentDidMount(){
    console.log(this.props.user)
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>
              {this.props.user.firstName} {this.props.user.lastName}
            </CardTitle>
            <CardSubtitle>Username: {this.props.user.username}</CardSubtitle>
          </CardBody>
          <img
            width="100%"
            src={require("../Home/profile.png")}
            alt="Card image cap"
          />
          <CardBody>
            <CardText>
              Collector Level: {this.props.collectorLevel}
            </CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  }
}
