import React from "react";
import AlumniCard from "./AlumniCard";

export default class AlumniList extends React.Component {
  render() {
    const regex = new RegExp(this.props.search, "i");
    const filteredUsers = this.props.users.filter(user =>
      user.name.match(regex)
    );
    return (
      <div className="alumni-card-container">
        {filteredUsers.map(user => <AlumniCard {...user} />)}
      </div>
    );
  }
}
