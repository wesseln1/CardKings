import React, { Component } from "react";
import { Flex, Box} from "rebass";
import { Redirect } from "react-router-dom";
import App from "../../App"
import { Link } from "react-router-dom" 

// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupButtonDropdown,
//   Input,
//   Button,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from "reactstrap";

export default class NavBar extends Component {

  render() {
    console.log("hello");
    return (
      <>
        {/* {this.props.user ? ( */}
          <Flex px={2} color="white" bg="black" alignItems="center">
            <Link  to="/">
              Card Kings
            </Link>
            <Box mx="auto" className="NavHover" />
            <Link to={`/${parseInt(this.props.currentUser)}`}>
              My Profile
            </Link>
            <Box mx="auto" className="NavHover" />
            <Link to={`/collection/${parseInt(this.props.currentUser)}`}>
              My Collection
            </Link>
            <Box mx="auto" className="NavHover" />
            <Link to="/splash" onClick={this.props.handleLogout}>
              {/* <button type="button" > */}
              Logout
              {/* </button> */}
            </Link>
          </Flex>
        {/* ) : (
         <Redirect to="/splash" />
        )} */}
      </>
    );
  }
}
