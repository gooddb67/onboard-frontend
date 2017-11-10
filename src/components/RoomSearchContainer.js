import React from "react";
import Search from "./Search"
import { getRooms } from "../services/api"
import RoomList from "./RoomList"


export default class RoomSearchContainer extends React.Component {

  state = {
    rooms: [],
    search: ''
  }

  componentDidMount(){
    getRooms()
    .then(rooms => this.setState({
      rooms
    }))
  }

  handleChange = (term) => {
    console.log(term)
    this.setState({
      search: term
    })
  }

  render() {
    console.log("hit container", this.state.search)
    return (
      <div>
        <h1>Find A Room</h1>
        <Search onChange={this.handleChange} search={this.state.search} />
        <RoomList search={this.state.search} rooms={this.state.rooms} />
      </div>
    );
  }
}
