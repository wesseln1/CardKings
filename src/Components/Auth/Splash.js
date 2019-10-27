import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { Button, Card, CardTitle, CardText, CardImg } from "reactstrap";
// import Login from "../Auth/Login";
// import Register from "../Auth/Register";
// import { Route, Redirect } from "react-router-dom";

export default class Splash extends Component {
  render() {
    return (
      <>
        <div>
          <Card
            body
            inverse
            style={{ backgroundColor: "#BFB3A4", borderColor: "#333" }}
          >
            <CardTitle>Card Kings</CardTitle>
            <Card
              body
              inverse
              style={{ backgroundColor: "#BFB3A4", borderColor: "#333" }}
            >
              <CardText>
                Welcome to Card Kings! A trading card organizer!
              </CardText>
              <div>
                <Link to="/login">
                  <Button color="primary" type="submit">
                    Login
                  </Button>
                </Link>
              </div>
              <div>
                <Link to="/register">
                  <Button color="primary" type="button">
                    Register
                  </Button>
                </Link>
              </div>
            </Card>
          </Card>
        </div>
      </>
    );
  }
}
