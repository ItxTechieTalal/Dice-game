import React, { useState } from 'react';
import { styled } from 'styled-components';
import Score from './Score';
import Number from './Number';
import Dice from './Dice';
import Rules from './Rules';

const Game = () => {
  const [cDice, Sdice] = useState(1);
  const [No, SetNo] = useState();
  const [score, Sscore] = useState(0);
  const [error,Serror] =useState("")
  const [showRules , SshowRules] =useState(false)


  const RandomNo = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const Rolldice = () => {
    const SrandomNo = RandomNo(1, 6); // ya wala use krien ga
    Sdice(SrandomNo);

    // Check if the rolled number matches the expected number
if(!No){
  Serror("You have not selected any number");
return;
}
    if(SrandomNo === No) {
      Sscore(score + 1); // Use functional update to update the state correctly
    } else {
      Sscore(score - 1); // Use functional update to update the state correctly
    }
    SetNo(undefined)
  };
  let reset =()=>{
Sscore(0)

  }

  return (
    <>
      <Main>
        <Score Score={score} />
        <Number No={No} SetNo={SetNo} error={error}Serror={Serror}/>
      </Main>
      <Dice cDice={cDice} Sdice={Sdice} Rolldice={Rolldice} />
      <Main2 >
      <button className="wow3" onClick={reset}>Reset</button>
      <button className='wow3' onClick={() => SshowRules((prev)=>!prev)}>
      {showRules ? "Hide" : "Show"} 
        </button>
    
      </Main2>
     { showRules &&  <Rules/>}

    </>
  );
};

export default Game;

const Main = styled.div`
  display: flex;
  padding: 23px;
  justify-content: space-around;
  

`;
const Main2 =styled.div`
  display: flex ;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  gap: 10px;
  margin-top: 10px;
  
  .wow3{
  cursor: pointer;
    background-color: transparent;
    min-width: 110px;
    padding: 8px 20px;
    border-radius: 10px;
    &.hover{
background-color :black
    }
  }

`
