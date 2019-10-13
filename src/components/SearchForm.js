import React from "react";
import { StyledForm } from '../Styles.js';
import CharacterCard from "./CharacterCard";


export default function SearchForm(props) {  
 
  return (
    <section className="search-form">    
      <StyledForm onSubmit={props.handleSubmit}>
        <input 
          id="name"
          value={props.name}
          name="name"
          type="text"
          placeholder="Search for character by Name"
          onChange={props.handleChange}
        />
        <button type="submit">Search</button>
      </StyledForm>
    </section> 
  )  
}