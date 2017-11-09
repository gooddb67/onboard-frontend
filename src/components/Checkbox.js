import React from "react";

function Checkbox(props) {
  return (
    <input
      id={props.id}
      type="checkbox"
      value={props.value}
      onChange={e => {
        props.onChange(e.target.id, e.target.checked);
      }}
    />
  );
}

export default Checkbox;
