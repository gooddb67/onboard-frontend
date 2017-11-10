import React from "react";

export default class RoomCard extends React.Component {
  render() {
    const showButton = this.props.joined ? (
      <input data-roomid={this.props.id} type="button" value="Joined" />
    ) : (
      <input data-roomid={this.props.id} type="button" value="Join Room" />
    );
    return (
      <div>
        <div>{this.props.name}</div>
        {showButton}
      </div>
    );
  }
}
