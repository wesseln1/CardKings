import React, { Component } from "react";
import { Card, CardTitle, CardText, CardImg } from "reactstrap";
import APIManager from "../../Modules/APIManager";
import App from "../../App"
import "./Home.css";

export default class Home extends Component {
  state = {
    user: "",
    currentUser: ""
  };

  getUser() {
    // let currentUser = this.props.currentUser;
    APIManager.getUserById(this.props.currentUser).then(user => {
      this.setState({
        user: user,
        currentUser: this.props.currentUser
      });
    });
  }

  componentDidMount() {
    console.log(this.props.currentUser);
    this.getUser();
  }

  render() {
    return (
      <>
        {this.props.isAuthenticated ? (
          <>
            <div>
              <Card className="profileCard">
                <CardTitle>Welcome {this.state.user.firstName}!</CardTitle>
              </Card>
            </div>
            <div>
              <Card className="profileCard">
                <CardImg
                  className="profilePic"
                  src={require("./profile.png")}
                />
                <CardTitle>Username: {this.state.user.username}</CardTitle>
                <CardText>
                  Collector Level: {this.state.user.collectorLevel}
                </CardText>
              </Card>
            </div>
          </>
        ) : (
          <App />
        )}
      </>
    );
  }
}
