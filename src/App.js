import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignupContainer from "./components/SignupContainer";
import Home from "./components/Home";
import UserShow from "./components/UserShow"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/users/:user_id" component={UserShow} />

      </div>
    );
  }
}

export default App;
