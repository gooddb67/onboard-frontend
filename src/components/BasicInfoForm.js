import React from "react";
import InputTextBox from "./InputTextBox";
import Checkbox from "./Checkbox";

export default class BasicInfoForm extends React.Component {
  render() {
    return (
      <div class="form">
        <h1>Get onboard</h1>
        <form>
          <InputTextBox
            id="email"
            value={this.props.formInfo.email}
            onChange={this.props.handleChange}
            placeholder="Email"
          />
          <br />
          <InputTextBox
            id="name"
            value={this.props.formInfo.name}
            onChange={this.props.handleChange}
            placeholder="Name"
          />
          <br />
          <input
            id="password"
            type="password"
            value={this.props.formInfo.password}
            onChange={e => {
              this.props.handleChange(e.target.id, e.target.value);
            }}
            placeholder="Password"
          />

          <br />
          <InputTextBox
            id="avatar"
            value={this.props.formInfo.avatar}
            onChange={this.props.handleChange}
            placeholder="Avatar Link"
          />
          <br />
          <div className="checkbox">
            <label htmlFor="admin">Admin:</label>
            <Checkbox
              id="admin"
              value={this.props.formInfo.admin}
              onChange={this.props.handleChange}
            />
          </div>
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
