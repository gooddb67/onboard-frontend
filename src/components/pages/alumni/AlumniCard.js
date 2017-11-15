import React from "react";

function AlumniCard({ name, email, avatar, experiences }) {

  let url;
  avatar ? url = avatar : url = "http://www.helpyourbet.com/images/avatars/blank_avatar.jpg"

  return (
    <div className="alumni-card">
      <ul className="list-info">
        <li><img src={url} height="122" width="110" /></li>
        {name}
        <li>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>
          {experiences[0].title} @ {experiences[0].company}
        </li>
      </ul>
    </div>
  );
}

export default AlumniCard;
