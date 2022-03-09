import React from "react";

const Note = (props) => {
  return (
    <div className="note">
      <h1 className="noteTitle">{props.title}</h1>
      <p className="noteText">{props.content}</p>
    </div>
  );
};

export default Note;
