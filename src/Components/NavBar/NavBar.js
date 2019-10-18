import React, { Component } from "react";
import { Flex, Box, Link } from "rebass";
import {
  InputGroup,
  InputGroupAddon,
//   InputGroupButtonDropdown,
//   Input,
  Button,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
} from "reactstrap";

export default class NavBar extends Component {
//   state = {};

  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push("/");
  };

  render() {
      console.log("hello")
    return (
      <>
        <Flex px={2} color="white" bg="black" alignItems="center">
          Card Kings
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button color="danger">I'm a button</Button>
            </InputGroupAddon>
          </InputGroup>
          <Box mx="auto" className="NavHover" />
          <Link variant="nav" href="#!">
            Profile
          </Link>
          <Box mx="auto" className="NavHover" />
          <Link variant="nav" href="#!">
            My Collection
          </Link>
          <Box mx="auto" className="NavHover" />
          <Link variant="nav" href="#!">
            My Collection
          </Link>
        </Flex>
      </>
    );
  }
}
