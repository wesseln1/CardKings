import React, { Component } from "react"
import ProfileList from "./ProfileList"
import "./Profile.css"

export default class MyProfile extends Component {

    render() {
        return (
            <ProfileList    getFavorites={this.props.getFavorites}
            favCards={this.props.favCards}
            key={this.props.currentUser}
            getData={this.props.getData}
            user={this.props.user}
            cards={this.props.cards}
            currentUser={this.props.currentUser}
            setUser={this.props.setUser}
            {...this.props}/>
        )
    }
}