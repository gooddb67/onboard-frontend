import React from "react";

export default class QuestionCard extends React.Component {
  render() {
    const sortedAnswers = this.props.answers.sort((answer1, answer2) => {
      return answer2.vote - answer1.vote;
    });
    return (
      <div>
        <div>{this.props.question}</div>
        <ul>
          {sortedAnswers.map(answer => (
            <li>
              {answer.answer} | {answer.vote} Votes
              <input
                type="button"
                value="Like"
                onClick={e => {
                  this.props.onVote(answer.id);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
