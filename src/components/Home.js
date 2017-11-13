import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="head-section">
          <img
            src="https://image.freepik.com/free-vector/social-network-connections_1010-422.jpg"
            alt=""
          />
          <div className="header-container">
            <h1>onBoard</h1>
            <p>Where Work Meets Community</p>
            <p>
              Want to connect with an alum? Want to practice some interview
              questions with your friends? onBoard creates a portal for your
              community, to help your community.
            </p>
          </div>
        </section>
        <section className="how-to-section">
          <h1>How This Works</h1>
          <div className="how-to-content">
            <div className="step">
              <div className="how-to-head">
                <p>Join a Community / Room</p>
              </div>
              <div className="how-to-body">
                <p>Get access to all community resources</p>
              </div>
              <img src={require("./images/Team.png")} alt="" />
            </div>
            <div className="step">
              <div className="how-to-head">
                <p>Use Community Resources</p>
              </div>
              <div className="how-to-body">
                <p>
                  From interview questions to connecting with alumni and more...
                </p>
              </div>
              <img
                src="https://housing.umn.edu/sites/housing.umn.edu/files/resources.png"
                alt=""
              />
            </div>
            <div className="step">
              <div className="how-to-head">
                <p>Give Back to Your Community</p>
              </div>
              <div className="how-to-body">
                <p>Post answers to questions...</p>
              </div>
              <img
                src="https://www.cmu.edu/teaching/designteach/syllabus/pen_icon-01.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <footer>
          <p>Copyright &#169; 2017 onBoard Inc.</p>
        </footer>
      </div>
    );
  }
}
