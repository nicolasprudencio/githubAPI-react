import styled from "styled-components";

export const Loader = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    
    min-height: 75vh;
  

  .loading {
      animation: is-rotating 1s infinite;
      border-radius: 50%;
      border: 4px solid #ccc;
      border-top-color: #c901c9 ;
      height: 50px;
      width: 50px;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn)
    }
  }
`