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
          console.log(user)
          this.getCollectorLevel(user)
        })
  }

  getCollectorLevel(user){
      console.log("at get", user)
    APIManager.get("collectorLevels", user.collectorLevelId)
    .then(level=>
    // console.log("hayy", level),
    this.setState({
        user: user,
        collectorLevel: level.level,
        currentUser: this.props.currentUser
      })
      )
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
            collectorLevel={this.state.collectorLevel}
            currentUser={this.state.currentUser}
          />
        </div>
      </>
    );
  }
}
