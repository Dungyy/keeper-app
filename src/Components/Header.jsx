import React from "react";

function Header() {
  return (
    <header>
      <h1>Keeper</h1>
      <h3 style={{ color: "white" }}>of your memories</h3>
      <h3
        style={{ cursor: "pointer", marginLeft: "80%", color: "white"}}
        onClick={() => (window.location = "mailto:erickmunoz13@gmail.com")}
      >
        Contact
      </h3>
    </header>
  );
}

export default Header;
