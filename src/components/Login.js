import React from "react";

export default class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    } else if (e.target.name === "password") {
      this.setState({ password: e.target.value });
    }
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleLoginSubmit}>
          <h1>Log In</h1>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br />
          <input type="submit" value="Log in" />
        </form>
      </div>
    );
  }
}
