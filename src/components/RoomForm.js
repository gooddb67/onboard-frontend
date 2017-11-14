import React from "react";

export default class RoomForm extends React.Component {
  state = {
    name: "",
    avatar: ""
  };

  handleChange = e => {
    if (e.target.name === "name") {
      this.setState({ name: e.target.value });
    } else if (e.target.name === "avatar") {
      this.setState({ avatar: e.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRoomFormSubmit(this.state.name, this.state.avatar);
    this.setState({ name: "", avatar: "" });
  };

  render() {
    return (
      <div className="room-form-input">
        <form onSubmit={this.handleSubmit}>
          <input
            className="room-form-input"
            name="name"
            type="text"
            placeholder="Enter a room name"
            onChange={this.handleChange}
            value={this.state.name}
          />{" "}
          <br />
          <input
            className="room-form-input"
            name="avatar"
            type="text"
            placeholder="Add room avatar"
            onChange={this.handleChange}
            value={this.state.avatar}
          />{" "}
          <br />
          <input id="create-room-button" type="submit" value="Create Room" />
        </form>
      </div>
    );
  }
}
