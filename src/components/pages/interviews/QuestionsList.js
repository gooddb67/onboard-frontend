import React from "react";
import QuestionCard from "./QuestionCard";

export default class QuestionsList extends React.Component {
  render() {
    const regex = new RegExp(this.props.search, "i");
    const filteredQuestions = this.props.questions.filter(question =>
      question.question.match(regex)
    );
    return (
      <div>
        {filteredQuestions.map(question => (
          <QuestionCard
            onVote={this.props.onVote}
            onAddAnswer={this.props.onAddAnswer}
            {...question}
          />
        ))}
      </div>
    );
  }
}
