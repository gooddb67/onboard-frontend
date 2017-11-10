import React from "react";
import RoomCard from "./RoomCard";

export default class RoomList extends React.Component {
  render() {
    const regex = new RegExp(this.props.search, "i");
    const filteredRooms = this.props.rooms.filter(room =>
      room.name.match(regex)
    );
    console.log(filteredRooms);
    return (
      <ul>
        {filteredRooms.map(room => (
          <RoomCard
            joined={
              !!this.props.userRooms.find(r => r.id === parseInt(room.id))
            }
            name={room.name}
            avatar={room.avatar}
            id={room.id}
          />
        ))}
      </ul>
    );
  }
}
