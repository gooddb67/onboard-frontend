import React from "react";

export default class CompanyCard extends React.Component {
  render() {
    return (
      <div className="card company">
        <div className="card-image">
          <img
            src="https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png"
            alt=""
          />
        </div>
        <div className="card-info">
          <p className="card-company-name">{this.props.company.name}</p>
          <p className="card-company-description">
            {this.props.company.description}
          </p>
          <a
            className="card-company-link"
            href={this.props.company.url}
            target="_blank"
          >
            Website: {this.props.company.url}
          </a>
        </div>
        <div className="card-button">
          <input type="button" value="See Questions" />
        </div>
      </div>
    );
  }
}
