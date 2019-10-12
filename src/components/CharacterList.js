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

  return (
    <div className="cards-container">
      <div>
        <SearchForm List={data} />
      </div><br></br>
      <br></br>
      <br></br>      
      <section className="character-list grid-view">
        {data.map(char => {
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
