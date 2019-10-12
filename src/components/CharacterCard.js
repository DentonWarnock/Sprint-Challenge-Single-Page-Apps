import React from "react";
import styled from 'styled-components';

export const StyledCharCard = styled.div`
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.5rem;
  text-align: center;
  
  img {
    border-radius: 0.5rem;
  }

  span {
    color: red;
  }
`

export default function CharacterCard(props) {
  return (
    <StyledCharCard key={props.id}>
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <h3>{props.species} - {props.gender} - <span>{props.status}</span> </h3>
    </StyledCharCard>
  )
}
