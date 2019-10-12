import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

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
  );
}
