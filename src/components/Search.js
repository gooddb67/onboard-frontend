import React from "react";

export default class Search extends React.Component {

  render() {
    return (
      <div>
        <form>
          <label>Search</label>
          <input type="text" onChange={(e) => this.props.onChange(e.target.value)} value={this.props.search} />
        </form>

      </div>
    );
  }
}
