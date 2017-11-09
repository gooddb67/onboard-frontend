import React from "react";

export default class BasicInfoForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign Up!</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={this.props.formInfo.email}
            onChange={e => {
              this.props.handleChange(e.target.id, e.target.value);
            }}
          />
          <br />
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={this.props.formInfo.name}
            onChange={e => {
              this.props.handleChange(e.target.id, e.target.value);
            }}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={this.props.formInfo.password}
            onChange={e => {
              this.props.handleChange(e.target.id, e.target.value);
            }}
          />
          <br />
          <label htmlFor="avatar">Avatar:</label>
          <input
            type="text"
            id="avatar"
            value={this.props.formInfo.avatar}
            onChange={e => {
              this.props.handleChange(e.target.id, e.target.value);
            }}
          />
          <br />
          <label htmlFor="admin">Admin:</label>
          <input
            type="checkbox"
            id="admin"
            value={this.props.formInfo.admin}
            onChange={e => {
              this.props.handleChange(e.target.id, e.target.checked);
            }}
          />
          <br />
          <br />
          <input
            type="button"
            value="Next"
            onClick={this.props.onFirstFormSubmit}
          />
        </form>
      </div>
    );
  }
}
