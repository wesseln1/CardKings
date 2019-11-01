import React, { Component } from "react";
import { Flex, Box } from "rebass";
import { CardImg } from "reactstrap"
import { Redirect } from "react-router-dom";
import App from "../../App";
import "./NavBar.css";
import { Link } from "react-router-dom";

import {
  // InputGroup,
  // InputGroupAddon,
  // InputGroupButtonDropdown,
  Input,
  Button
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from "reactstrap";
import UserCardList from "../UserCards/UsersCardsList";

export default class NavBar extends Component {
  state = {
    search: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  render() {
    return (
      <>
        {/* {this.props.user ? ( */}
        <Flex px={2} color="white" className="navBarBackground" alignItems="center">
          <Input
            className="searchInput"
            id="search"
            onChange={this.handleFieldChange}
            type="text"
          ></Input>
          <UserCardList
            getFavorites={this.props.getFavorites}
            favCards={this.props.favCards}
            getData={this.props.getData}
            search={this.state.search}
            {...this.props}
          />
          <Box mx="auto" className="NavHover" />
          <Link className="logoLink" to="/"><CardImg className="navLogo" src={require("../Auth/carklogo.png")}/></Link>
          <Box mx="auto" className="NavHover" />
          <Link className="navLinks" to={`/profile/${parseInt(this.props.currentUser)}`}>
            My Profile
          </Link>
          <Box mx="auto" className="NavHover" />
          <Link className="navLinks" to={`/collection/${parseInt(this.props.currentUser)}`}>
            My Collection
          </Link>
          <Box mx="auto" className="NavHover" />
          <Link className="navLinks" to="/splash" onClick={this.props.handleLogout}>
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
