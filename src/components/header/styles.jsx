import styled from "styled-components";


export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;



  input {
    width: 90%;
    padding: .75rem;
    
    
    border: 1px solid #ccc;
    border-radius: 18px;
    
    font-size: 16px;
  
  }

  button {
    padding: .5rem;
    width: 7rem;
    
    border: none;
    border-radius: 18px;
    
    background-color: #c901c9;
    color: white;

    font-weight: bold;
    font-size: 16px;

    transition: .2s ease-in-out;

    &:hover {
      filter: brightness(.9);
      cursor: pointer;
    }
  }

`