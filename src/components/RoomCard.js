import React from "react";

export default class RoomCard extends React.Component {
  render() {
    const showButton = this.props.joined ? (
      <input
        className="room-card-button"
        type="button"
        value="Leave"
        onClick={() => {
          this.props.onLeaveRoom(this.props.id);
        }}
      />
    ) : (
      <input
        className="room-card-button"
        type="button"
        value="Join Room"
        onClick={() => {
          this.props.onJoinRoom(this.props.id);
        }}
      />
    );
    return (
      <div className="room-card find-all">
        <p>{this.props.name}</p>
        <img
          src="https://media.simplecast.com/podcast/logo_image/2481/larachat-logo.png"
          alt=""
        />
        {showButton}
      </div>
    );
  }
}
