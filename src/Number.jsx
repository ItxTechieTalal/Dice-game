import React, { useState } from 'react'
import styled from 'styled-components'
const Number = ({No,SetNo,error,Serror}) => {

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    
  };


 let myNo = [1,2,3,4,5,6]

//console.log(SetNo);

  return (
    <>
      
<Main>

<div className='error'>{error}</div>

<div className='wow'>{myNo.map((v,i,a)=>(

<Box
isSelected = {No===v}

 key={i}
 onClick={() => {
  SetNo(v);
  Serror(""); // Assuming Serror is a state update function for handling errors
}}
> 

 {v}
 
 
 </Box>

))}

</div>

</Main>


    </>
  )
}

export default Number

let Main = styled.div`
 .wow{
  display: flex;
gap: 24px;
 }
 .error{
color: red;
padding: 5px;

 }

`



let Box = styled.div `
 cursor: pointer;
 height: 42px;
  width: 42px;
  border: 1px solid gray;
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 700;
background-color: ${(propHun) =>(propHun.isSelected 
? "black"
: "white"
)};
color: ${(propHun) =>(propHun.isSelected 
? "white"
: "black" // ! not opperator lga kr directly reverse v kr skta hain
)};




`

