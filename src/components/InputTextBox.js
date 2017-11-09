import React from "react";

function InputTextBox(props) {
  return (
    <input
      id={props.id}
      type="text"
      value={props.value}
      onChange={e => {
        props.onChange(e.target.id, e.target.value);
      }}
    />
  );
}

export default InputTextBox;
