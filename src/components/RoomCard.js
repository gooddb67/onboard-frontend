import React from "react";

export default class RoomCard extends React.Component {
  render() {
    const showButton = this.props.joined ? (
      <input type="button" value="Leave" onClick={() => {this.props.onLeaveRoom(this.props.id)} } />
    ) : (
      <input type="button" value="Join Room" onClick={() => {this.props.onJoinRoom(this.props.id)}} />
    );
    return (
      <div>
        <div>{this.props.name}</div>
        {showButton}
      </div>
    );
  }
}
