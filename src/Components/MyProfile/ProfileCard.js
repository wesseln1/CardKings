import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  CardImg,
  CardLink,
  CardSubtitle,
  CardBody
} from "reactstrap";

export default class MyProfileCard extends Component {
  render() {
    return (
      <div className="profileDiv myProfileDiv">
        <Card className="profileCard myProfileCard">
          <CardBody>
            <CardTitle>
              {this.props.user.firstName} {this.props.user.lastName}
            </CardTitle>
            <CardSubtitle>Username: {this.props.user.username}</CardSubtitle>
          </CardBody>
          <CardImg
          className="myProfilePic"
            src={this.props.user.profilePic}
            alt="Card image cap"
          />
          <CardBody>
            <CardText>
              Collector Level: {this.props.collectorLevel}
            </CardText>
            <CardText>
              Favorite Team: {this.props.user.favTeam}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
