import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";
import HeroBG from "./HeroBG";
// import Home from "../pages/Home";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addItem(inputText) {
    setNotes((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((notes, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      
        <Header />
        <HeroBG />
        {/* <Router>
        <NavLink>
          <Route exact path="/" component={Home} />
        </NavLink>
        </Router> */}
        <CreateArea onAdd={addItem} />
        {notes.map((noteText, index) => {
          return (
            <Note
              key={uuidv4()}
              id={index}
              onDelete={deleteNote}
              title={noteText.title}
              content={noteText.content}
            />
          );
        })}
      
    </div>
  );
}
