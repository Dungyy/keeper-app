import React, { useState } from "react";

const Input = () => {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="inputContainer">
      <form className="input">
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="Title..."
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Text..."
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Input;
