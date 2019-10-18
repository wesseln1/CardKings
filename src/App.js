import React, { Component } from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar"
// import ApplicationViews from "./Components/ApplicationViews/ApplicationViews"


export default class App extends Component {
  // state = {
  //   user: "",
  // }

  render (){
    return (
    <>
      <NavBar />
      {/* <ApplicationViews /> */}
    </>
    )
  }
}