import React from "react";
import RoomCard from "./RoomCard"

export default class RoomList extends React.Component {

  render(){
    const regex = new RegExp(this.props.search, "i")
    const filteredRooms = this.props.rooms.filter((room) => room.name.match(regex))
    return(
      <ul>
        {filteredRooms.map((room) => <RoomCard name={room.name} avatar={room.avatar} />)}
      </ul>
    );
  }

}
