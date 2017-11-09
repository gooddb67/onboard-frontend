import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form action="">
          Email: <input type="text" placeholder="Enter your email" />
          <br />
          Password: <input type="password" placeholder="Enter your password" />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
