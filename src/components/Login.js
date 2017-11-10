import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <form className="form">
          <h1>Log In</h1>
          <input type="text" placeholder="Enter your email" />
          <br />
          <input type="password" placeholder="Enter your password" />
          <br />
          <input type="submit" value="Log in" />
        </form>
      </div>
    );
  }
}
