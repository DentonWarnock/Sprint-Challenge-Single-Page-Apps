import React, { useState } from "react";

export default function SearchForm(props) {
  const [name, setName] = useState("")

  const handleChange = event => {
    setName(event.target.value)
  }

  const handleSubmit = event => {
    console.log(event)
    event.preventDefault();
  }
 
  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <input 
          id="name"
          value={name}
          name="name"
          type="text"
          placeholder="Search for character by Name"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
