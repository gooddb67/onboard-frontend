import React from "react";
import InputTextBox from "./InputTextBox";
import Checkbox from "./Checkbox";

export default class BasicInfoForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign Up!</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <InputTextBox
            id="email"
            value={this.props.formInfo.email}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="name">Full Name:</label>
          <InputTextBox
            id="name"
            value={this.props.formInfo.name}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={this.props.formInfo.password}
            onChange={e => {
              this.props.handleChange(e.target.id, e.target.value);
            }}
          />

          <br />
          <label htmlFor="avatar">Avatar:</label>
          <InputTextBox
            id="avatar"
            value={this.props.formInfo.avatar}
            onChange={this.props.handleChange}
          />
          <br />
          <label htmlFor="admin">Admin:</label>
          <Checkbox
            id="admin"
            value={this.props.formInfo.admin}
            onChange={this.props.handleChange}
          />
          <br />
          <br />
          <input
            type="button"
            value="Next"
            onClick={e => {
              this.props.onFirstFormSubmit(e.target);
            }}
          />
        </form>
      </div>
    );
  }
}
