import React from "react";

function AlumniCard({ name, email, avatar, experiences }) {
  return (
    <div className="alumni-card">
      <ul className="list-info">
        {name}
        <li>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>{avatar}</li>
        <li>
          {experiences[0].title} @ {experiences[0].company}
        </li>
      </ul>
    </div>
  );
}

export default AlumniCard;
