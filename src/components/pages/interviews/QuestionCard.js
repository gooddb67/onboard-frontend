import React from "react";
import AnswerCard from "./AnswerCard";

export default class QuestionCard extends React.Component {
  state = {
    showAnswer: false
  };

  handleShowAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };
  render() {
    const sortedAnswers = this.props.answers.sort((answer1, answer2) => {
      return answer2.vote - answer1.vote;
    });
    const answers = this.state.showAnswer ? (
      <AnswerCard sortedAnswers={sortedAnswers} onVote={this.props.onVote} />
    ) : null;
    return (
      <div>
        <div className="card">
          <div className="card-question">
            <p>{this.props.question}</p>
          </div>
          <div className="card-buttons">
            <div className="add-button">
              <i
                className="material-icons"
                onClick={() => this.props.onAddAnswer(this.props.id)}
              >
                add_box
              </i>
            </div>
            <div className="show-button">
              <i className="material-icons" onClick={this.handleShowAnswer}>
                school
              </i>
            </div>
          </div>
        </div>
        {answers}
      </div>
    );
  }
}
