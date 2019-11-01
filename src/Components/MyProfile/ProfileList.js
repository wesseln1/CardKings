import React, { Component } from "react";
import MyProfileCard from "./ProfileCard";
import APIManager from "../../Modules/APIManager";

export default class ProfileList extends Component {
  state = {
    user: "",
    currentUser: ""
  };

  getUser() {
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
    APIManager.get("collectorLevels", this.state.user.collectorLevel).then(level =>
      this.setState({
        collectorLevel: level.level,
      })
    );
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <>
        <div className="mainProflileDiv">
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
