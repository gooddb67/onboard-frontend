import React from "react";

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={e => this.props.onChange(e.target.value)}
            value={this.props.search}
            className="searchBox"
            placeholder="Search for..."
          />
        </form>
      </div>
    );
  }
}
