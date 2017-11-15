import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignupContainer from "./components/SignupContainer";
import Home from "./components/Home";
import UserShow from "./components/UserShow";
import Login from "./components/Login";
import { authorize } from "./components/Authorize";
import { login, createUser } from "./services/api";
import jwt_decode from "jwt-decode";

class App extends Component {
  state = {
    user: {}
  };

  loginUser = params => {
    login(params).then(user => {
      if (!user.error) {
        localStorage.setItem("jwtToken", user.jwt);
        localStorage.setItem("user_id", user.id);
        this.setState({ user: user });
      }
    });
  };

  logoutUser = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user_id");
    this.setState({
      user: {}
    });
  };

  signup = user => {
    createUser(user).then(json => {
      if (!json.error) {
        localStorage.setItem("jwtToken", json.jwt);
        localStorage.setItem("user_id", json.id);
        this.setState({ user: json });
      }
    });
  };

  render() {
    console.log("HI from decode", decode);
    const AuthLoginForm = authorize(Login);
    const AuthUserShow = authorize(UserShow);
    const AuthSignupForm = authorize(SignupContainer);
    const loggedIn = !!localStorage.getItem("jwtToken");
    const userId = loggedIn ? localStorage.getItem("user_id") : null;
    const decode = loggedIn
      ? jwt_decode(localStorage.getItem("jwtToken"))
      : null;
    const user_id = decode ? decode.user_id : null;
    return (
      <div className="App">
        <NavBar loggedIn={loggedIn} userId={userId} />
        <Route exact path="/" component={Home} />
        <Route
          path="/login"
          render={props => {
            return !!localStorage.getItem("jwtToken") ? (
              <Redirect to={`/users/${this.state.user.id}`} />
            ) : (
              <AuthLoginForm onLogin={this.loginUser} {...props} />
            );
          }}
        />
        <Route
          path="/signup"
          render={props => {
            return this.state.user.jwt ? (
              <Redirect to={`/users/${this.state.user.id}`} />
            ) : (
              <AuthSignupForm {...props} onSignup={this.signup} />
            );
          }}
        />
        <Route
          path="/logout"
          render={props => {
            this.logoutUser();
            return <AuthLoginForm onLogin={this.loginUser} {...props} />;
          }}
        />

        <Route
          path="/users/:user_id"
          render={props => {
            const urlUserId = props.match.params.user_id;
            if (urlUserId == user_id) {
              return <AuthUserShow {...props} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
      </div>
    );
  }
}

export default App;
