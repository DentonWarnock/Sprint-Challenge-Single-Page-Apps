import React, { useState } from "react";
import styled from 'styled-components';
import CharacterCard from "./CharacterCard";

const StyledForm = styled.form`
  text-align: center;
  height: 2rem;
  margin-bottom: 2rem;

  input {
    width: 25rem;
    height: 4rem;
    margin: 1rem;
    font-size: 1rem;
  } 

  button {
    width: 5rem;
    height: 5rem;
    margin: 1rem;
  }
`

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
