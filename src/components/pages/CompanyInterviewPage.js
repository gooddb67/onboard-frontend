import React from "react";
import CompanyIntro from "./interviews/CompanyIntro";
import QuestionsList from "./interviews/QuestionsList";
import Search from "../Search";
import { getCompanyQuestions, createQuestion } from "../../services/api";
import QuestionForm from "./interviews/QuestionForm";

export default class CompanyInterviewPage extends React.Component {
  state = {
    questions: [],
    search: "",
    addNewQuestion: false
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

  render() {
    console.log("company interview page", this.state.questions);
    const modalStyle = this.state.addNewQuestion
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
          modalStyle={modalStyle}
          onCloseClick={this.handleCloseClick}
        />
        <QuestionsList
          questions={this.state.questions}
          search={this.state.search}
        />
      </div>
    );
  }
}
