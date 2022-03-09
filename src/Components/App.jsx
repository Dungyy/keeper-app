import React from "react";
// import Header from "./Header.jsx";
import Note from "./Note";
import Footer from "./Footer";
import Notes from "../Notes";
// import Input from "./Input.jsx";
import Navbar from "./Navbar.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      {/* <Input /> */}
      {Notes.map((noteInfo) => (
        <Note
          key={noteInfo.key}
          title={noteInfo.title}
          content={noteInfo.content}
        />
      ))}
      <Footer />
    </div>
  );
}

