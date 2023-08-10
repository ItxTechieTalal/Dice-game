import React from 'react'
import dices from '../public/images/dices.png'
import styled from 'styled-components'
import "./App.css";

const Start = ({toggle}) => {
  
 
  return (
    <>
      
<Main >
<div className='first'>
 <img src={dices} width="440px" alt="" />
</div>
<div className='second'>

<h1 >Dice game</h1>
<button className='btn1' onClick={toggle} >Start Game</button>

</div>


</Main>




    </>
  )
}

export default Start

const Main = styled.div`
 max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
.first{

 justify-content: center;
 align-items: center;
margin: 8px;
margin-top: 30px;
}
.second{
 margin: 30px 30px 0px 30px;
 font-size: 29px;
 
 
 .btn1{
  background-color: black;
  padding: 10px 20px;
  border-radius :8px ;
  color: aliceblue;
  border: 1px solid transparent;
 }
}


`