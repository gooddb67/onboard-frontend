import React from "react";
import InputTextBox from "./InputTextBox";

export default class RoomForm extends React.Component {
  state = {
    name: "",
    avatar: ""
  };

  handleChange = (id, value) => {
    switch (id) {
      case "name":
        this.setState({ name: value });
        break;
      case "avatar":
        this.setState({ avatar: value });
        break;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRoomFormSubmit(this.state.name, this.state.avatar);
    this.setState({ name: "", avatar: "" });
  };

  render() {
    return (
      <div className="modal form" style={this.props.modalStyle}>
        <form onSubmit={this.handleSubmit} className="modal-form">
          <span className="close" onClick={this.props.onCloseClick}>
            &times;
          </span>
          <h1>Add Room</h1>
          <InputTextBox
            id="name"
            value={this.state.name}
            placeholder="Room Name"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <InputTextBox
            id="avatar"
            value={this.state.avatar}
            placeholder="Avatar Link"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Create Room" />
        </form>
      </div>
    );
  }
}
