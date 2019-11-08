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

export const StyledForm = styled.form`
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