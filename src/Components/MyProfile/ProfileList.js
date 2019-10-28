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
          currentUser: user.id,
          user: user
        });
      })
      .then(() => this.getCollectorLevel());
  }

  getCollectorLevel() {
    console.log("at get", this.state.user);
    APIManager.get("collectorLevels", this.state.user.collectorLevel).then(level =>
      // console.log("hayy", level),
      this.setState({
        collectorLevel: level.level,
      })
    );
  }

  componentDidMount() {
    console.log("mounting", this.props.currentUser);
    this.getUser();
  }

  render() {
    console.log("running");
    return (
      <>
        <div>
          <MyProfileCard
            key={this.state.currentUser}
            user={this.state.user}
            collectorLevel={this.state.collectorLevel}
            currentUser={this.state.currentUser}
          />
        </div>
      </>
    );
  }
}
