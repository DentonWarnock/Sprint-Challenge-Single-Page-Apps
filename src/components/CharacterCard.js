import React from "react";
import { StyledCharCard } from '../Styles.js';


export default function CharacterCard(props) {
  return (
    <StyledCharCard key={props.id}>
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <h3>{props.species} - {props.gender} - <span>{props.status}</span> </h3>
    </StyledCharCard>
  )
}
