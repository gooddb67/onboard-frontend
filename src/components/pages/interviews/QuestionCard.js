import React from "react";

export default class QuestionCard extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.question}</div>
        <ul>
          {this.props.answers.map(answer => (
            <li>
              {answer.answer} | {answer.votes ? answer.votes : "0"} Votes
              <input type="button" value="Like" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
