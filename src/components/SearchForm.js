import React, { useState } from "react";
import { StyledForm } from '../Styles.js';
import CharacterCard from "./CharacterCard";


export default function SearchForm(props) {
  const [name, setName] = useState("")
  const [results, setResults] = useState([props.list])

  const handleChange = event => {
    setName(event.target.value)
  }

  const handleSubmit = event => {
    console.log("Submit Pressed!", props)
    console.log("Results", results)
    event.preventDefault();
    setName("");
    const searchedName = results.filter(char => {
      // return char.name === name;
      console.log(char); // empty...
    })
    console.log(searchedName);
  }
 
  return (
    <section className="search-form">      
      <StyledForm onSubmit={handleSubmit}>
        <input 
          id="name"
          value={name}
          name="name"
          type="text"
          placeholder="Search for character by Name"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </StyledForm>
      {name}
    </section>
  );
}
