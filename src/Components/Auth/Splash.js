import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardTitle, CardText, CardImg } from "reactstrap";
import "./Auth.css";

export default class Splash extends Component {
  componentDidMount() {
    this.props.handleLogout();
  }
  render() {
    return (
      <div className="splashMainDiv">
        <>
            <div className="splashCardHeader">
              {/* <Card className="splashHeaderCard"> */}
                <CardImg className="cardHeader" src={require("./carklogo.png")} />
                {/* <CardTitle>Card Kings</CardTitle> */}
              {/* </Card> */}
            </div>
          <div className="splashDiv">
            {/* <div className="splashCardDiv infoDiv"> */}
              <Card className="splashTitleCard infoDiv" body inverse>
                <CardText className="cardP">
                  Welcome to Card Kings! A trading card organizer!
                </CardText>
              {/* </Card> */}
            {/* </div> */}
            {/* <div className="splashCardDiv"> */}
              {/* <Card className="splashTitleCard" body inverse> */}
                <div>
                  <Link to="/login">
                    <Button type="submit">
                      Login
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link to="/register">
                    <Button  type="button">
                      Register
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          {/* </div> */}
        </>
      </div>
    );
  }
}
