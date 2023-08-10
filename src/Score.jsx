import React from 'react'
import styled from 'styled-components'
const Score = ({Score}) => {
  return (
    
      <Main>
       
       <h1>  Total score : {Score}</h1>
      


       </Main>
       
    
  )
}

export default Score
const Main = styled.div `

h1{
 font-weight : bold ;
 padding-top: 10px;
 font-size : 24px;
}



`


