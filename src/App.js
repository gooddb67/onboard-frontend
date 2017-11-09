import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignupContainer from "./components/SignupContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignupContainer} />
      </div>
    );
  }
}

export default App;
