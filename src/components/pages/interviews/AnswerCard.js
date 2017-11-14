import React from "react";

export default class AnswerCard extends React.Component {
  render() {
    return (
      <div className="card-answers">
        {this.props.sortedAnswers.map(answer => (
          <div className="answer-card-container">
            <i
              className="material-icons"
              onClick={e => {
                this.props.onVote(answer.id);
              }}
            >
              favorite
            </i>
            <div className="answer-card-info">
              <p>{answer.answer}</p>
              <p>{answer.vote} Likes</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
