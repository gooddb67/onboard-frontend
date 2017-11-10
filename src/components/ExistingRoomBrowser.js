import React from "react";
import { Link } from "react-router-dom";

export default class ExistingRoomBrowser extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome Home!</h1>
        {this.props.rooms.map(room => <p>{room.name}</p>)}
        <Link to={`/users/${this.props.id}/rooms`}>Add Room</Link>
      </div>
    );
  }
}
