import React, { useState } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

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
      {/* <Footer /> */}
    </div>
  );
}
