import styled from 'styled-components'

import Start from "./Start"
import Game from './Game'
import "./App.css"
import { useState } from 'react'


function App() {
  const [gameStarted , SgameStarted] = useState(false)
let togglefunc =()=>{
  //SgameStarted(true) // aik doosra way v ha 
  SgameStarted((prev) => !prev)

}
  return (
    <>
  
   {gameStarted 
   ? <Game />
   : <Start toggle={togglefunc} />
    }
   

    </>
  )
}

export default App

