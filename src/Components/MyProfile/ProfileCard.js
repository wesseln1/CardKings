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
  render() {
    return (
      <div className="profileDiv">
        <Card className="profileCard">
          <CardBody>
            <CardTitle>
              {this.props.user.firstName} {this.props.user.lastName}
            </CardTitle>
            <CardSubtitle>Username: {this.props.user.username}</CardSubtitle>
          </CardBody>
          <img
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
