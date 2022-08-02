import styled from "styled-components";

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  
`;

export const WrapperImg = styled.img `
  align-self: flex-start;
  
  width: 12rem;
  margin-right: 2rem;
  border-radius: 50%;
  border: 5px solid #c901c9;
`;

export const WrapperInformation = styled.div `
  display: flex;
  flex-direction: column;

  h1 {

    margin-bottom: .5rem;

    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 24px;
  }

  span {
    font-size:18px ;
  }
`;

export const WrapperUserGeneric = styled.div `
  display: flex;
  align-items: center;




  a {
    color: #c901c9;

    
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    color: #c901c9;

    
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }

  h3 {
    margin-right: .5rem;
  }
`
export const WrapperStatus = styled.div `
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  div {
    margin-right: 1rem;
    text-align: center;
  }


`

export const WrapperUserInfo = styled.div `
  display: flex;
  flex-direction: column;
  
`




