import React from "react";
import FaSearch from 'react-icons/lib/fa/search'

export default class Search extends React.Component {

  render() {
    return (
      <div className="search-container">
        <form className="search-container">
          <input placeholder="Search for a room" className="search-input" type="text" onChange={(e) => this.props.onChange(e.target.value)} value={this.props.search} />
        </form>

      </div>
    );
  }
}
