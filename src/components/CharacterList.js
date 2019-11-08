import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm.js";

export default function CharacterList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res.data.results)
        setData(res.data.results)
      })
      .then(err => {
        console.log(err)
      })
  }, []);

  // Search Form State and Functions
  const [name, setName] = useState("")
  const [results, setResults] = useState("")

  const handleChange = event => {
    setName(event.target.value)
  }

  const handleSubmit = event => {
    console.log("Submit Pressed!")  
    event.preventDefault();   
    // 
    const searchResults = data.filter(char => {
      return char.name.includes(name);
    })
    setResults(searchResults);
    console.log("Searched Name", searchResults)
    console.log("Results", results)
    // setName("");
  }

  return (
    <div className="cards-container">
      <div>
        <SearchForm 
        name={name} 
        results={results} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
         />
      </div>
      {/* adding space between search form and cards */}
      <br></br> 
      <br></br>
      <br></br>   

      <section className="character-list grid-view">
          {results !== "" ? 
            results.map(char => {
              return (
                <CharacterCard 
                  key={char.id}
                  image={char.image}
                  name={char.name}
                  species={char.species}
                  gender={char.gender}
                  status={char.status}
                />
              )
            }) 
            // else
            : 
            data.map(char => {
              return (
                <CharacterCard 
                  key={char.id}
                  image={char.image}
                  name={char.name}
                  species={char.species}
                  gender={char.gender}
                  status={char.status}
                />
              )        
            })
          }
      </section>
    </div>
  );
}
