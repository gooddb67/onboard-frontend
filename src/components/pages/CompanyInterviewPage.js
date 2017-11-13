import React from "react";

export default class CompanyInterviewPage extends React.Component {
  render() {
    return (
      <form>
        <label>Interview Question</label>
        <input type="text" />
        <input type="submit" value="Add Question" />
      </form>
    );
  }
}
