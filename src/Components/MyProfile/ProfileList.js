import React, { Component } from "react";
import MyProfileCard from "./ProfileCard";
import APIManager from "../../Modules/APIManager";

export default class ProfileList extends Component {
  state = {
    user: "",
    currentUser: ""
  };

  getUser() {
    console.log("at getUSer", this.props.currentUser);
    APIManager.getUserById(this.props.currentUser)
      .then(user => {
        this.setState({
          user: user,
          currentUser: this.props.currentUser
        });
      })
      .then(() => console.log("fired at 21",this.state.currentUser, this.state.user));
  }

  componentDidMount() {
    console.log("mounting",this.props.currentUser);
    this.getUser();
  }

  render() {
      console.log("running")
    return (
      <>
        <div>
          <MyProfileCard
            key={this.state.currentUser}
            user={this.state.user}
            currentUser={this.state.currentUser}
          />
        </div>
      </>
    );
  }
}
