import React from "react";

export default class BasicInfoForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign Up!</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" />
          <br />
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <br />
          <label htmlFor="avatar">Avatar:</label>
          <input type="text" id="avatar" />
          <br />
          <label htmlFor="admin">Admin:</label>
          <input type="checkbox" id="admin" />
          <br />
          <br />
          <input type="button" value="Next" />
        </form>
      </div>
    );
  }
}
