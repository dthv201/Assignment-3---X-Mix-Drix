//Gaya Vishna 322887373
import { useState } from 'react'
import  Board from "./components/Board";
import WinnerMessage from "./components/WinnerMessage";
 import './App.css'

const App : React.FC = () => {

  const [winner, setWinner] = useState<string | null>(null)
  const [gameActive, setGameActive] = useState<boolean>(true)

  const handleGameOver = (winner: string) => {
    setWinner(winner)
    setGameActive(false)
  }

  const resetGame = () => {
    setWinner(null)
    setGameActive(true)
  }


  return(
    <div className='App'>
      <h1>X Mix Drix</h1>
      
      <Board gameActive={gameActive} onGameOver={handleGameOver} />
      {winner && <WinnerMessage winner={winner} onPlayAgain={resetGame} />}
    </div>
  );
}

export default App
