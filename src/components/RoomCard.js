import React from "react";

export default class RoomCard extends React.Component {
  render() {
    const showButton = this.props.joined ? (
      <input className="room-card-button" type="button" value="Leave" onClick={() => {this.props.onLeaveRoom(this.props.id)} } />
    ) : (
      <input className="room-card-button" type="button" value="Join Room" onClick={() => {this.props.onJoinRoom(this.props.id)}} />
    );
    return (
      <div>
        <div className="room-card">
          {this.props.name}
          {showButton}
        </div>
      </div>
    );
  }
}
