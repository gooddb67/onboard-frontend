import React from "react";
import InputTextBox from "../InputTextBox";

export default class CompanyForm extends React.Component {
  state = {
    name: "",
    description: "",
    avatar: "",
    url: ""
  };

  handleChange = (id, value) => {
    switch (id) {
      case "name":
        this.setState({ name: value });
        break;
      case "description":
        this.setState({ description: value });
        break;
      case "avatar":
        this.setState({ avatar: value });
        break;
      case "url":
        this.setState({ url: value });
        break;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCompanyFormSubmit(
      this.state.name,
      this.state.description,
      this.state.avatar,
      this.state.url
    );
    this.setState({ name: "", description: "", avatar: "", url: "" });
  };

  render() {
    return (
      <div className="modal form" style={this.props.modalStyle}>
        <form onSubmit={this.handleSubmit} className="modal-form">
          <span className="close" onClick={this.props.onCloseClick}>
            &times;
          </span>
          <h1>Add A Company</h1>
          <InputTextBox
            id="name"
            value={this.state.name}
            placeholder="Company Name"
            onChange={this.handleChange}
          />
          <br />
          <InputTextBox
            id="description"
            value={this.state.description}
            placeholder="Description"
            onChange={this.handleChange}
          />
          <br />
          <InputTextBox
            id="avatar"
            value={this.state.avatar}
            placeholder="Avatar Link"
            onChange={this.handleChange}
          />
          <br />
          <InputTextBox
            id="url"
            value={this.state.url}
            placeholder="Company URL"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Create Company" />
        </form>
      </div>
    );
  }
}
