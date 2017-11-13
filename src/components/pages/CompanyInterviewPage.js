import React from "react";
import CompanyIntro from "./interviews/CompanyIntro";
import QuestionsList from "./interviews/QuestionsList";
import Search from "../Search";
import {
  getCompanyQuestions,
  createQuestion,
  postVote,
  postAnswer
} from "../../services/api";
import QuestionForm from "./interviews/QuestionForm";
import AnswerForm from "./interviews/AnswerForm";

export default class CompanyInterviewPage extends React.Component {
  state = {
    questions: [],
    search: "",
    addNewQuestion: false,
    addNewAnswer: false,
    currAnswerQuestion: ""
  };

  handleVote = answerId => {
    postVote(answerId, {
      upvoted: 1
    }).then(res => {
      console.log(res, "hit response");
      this.showAllQuestions();
    });
  };

  handleAnswerSubmit = answer => {
    const userId = parseInt(this.props.match.params.user_id);
    const questionId = parseInt(this.state.currAnswerQuestion);
    postAnswer({
      answer: answer,
      user_id: userId,
      question_id: questionId
    }).then(res => {
      console.log(res);
      this.setState({ addNewAnswer: !this.state.addNewAnswer });
      this.showAllQuestions();
    });
  };

  showAllQuestions = () => {
    const roomId = this.props.match.params.room_id;
    const companyId = this.props.match.params.company_id;
    getCompanyQuestions(roomId, companyId).then(questions => {
      console.log(questions);
      this.setState({ questions });
    });
  };

  componentDidMount() {
    this.showAllQuestions();
  }

  addNewQuestion = () => {
    this.setState({ addNewQuestion: !this.state.addNewQuestion });
  };

  handleAddAnswer = questionId => {
    console.log("hid add answer", questionId);
    this.setState({
      addNewAnswer: !this.state.addNewAnswer,
      currAnswerQuestion: questionId
    });
  };

  handleChange = term => {
    this.setState({ search: term });
  };

  handleQuestionFormSubmit = question => {
    const room_id = this.props.match.params.room_id;
    const company_id = this.props.match.params.company_id;
    createQuestion(room_id, company_id, { question }).then(json => {
      console.log(json);
      this.setState({ addNewQuestion: !this.state.addNewQuestion });
      this.showAllQuestions();
    });
  };

  handleCloseClick = () => {
    this.setState({ addNewQuestion: !this.state.addNewQuestion });
  };

  handleCloseAnswerClick = () => {
    this.setState({ addNewAnswer: !this.state.addNewAnswer });
  };

  render() {
    console.log("company interview page", this.state.questions);
    const modalStyleQuestion = this.state.addNewQuestion
      ? { display: "block" }
      : { display: "none" };
    const modalStyleAnswer = this.state.addNewAnswer
      ? { display: "block" }
      : { display: "none" };
    return (
      <div>
        <CompanyIntro />
        <Search onChange={this.handleChange} search={this.state.search} />
        <input
          type="button"
          value="+ New Question"
          onClick={this.addNewQuestion}
          id="add-new-question-button"
        />
        <QuestionForm
          onQuestionFormSubmit={this.handleQuestionFormSubmit}
          modalStyle={modalStyleQuestion}
          onCloseClick={this.handleCloseClick}
        />
        <QuestionsList
          onVote={this.handleVote}
          questions={this.state.questions}
          search={this.state.search}
          onAddAnswer={this.handleAddAnswer}
        />
        <AnswerForm
          onAnswerFormSubmit={this.handleAnswerSubmit}
          modalStyle={modalStyleAnswer}
          onCloseClick={this.handleCloseAnswerClick}
        />
      </div>
    );
  }
}
