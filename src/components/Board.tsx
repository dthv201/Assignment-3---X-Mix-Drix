import React, { useEffect, useState } from "react";
import Square from "./Square";
import "./Board.css";

interface BoardProps {
    gameActive: boolean;
    onGameOver: (winner: string) => void; //notify game over
}

const Board: React.FC<BoardProps> = ({ gameActive, onGameOver }) => {
    const initialBoard: (string | null)[] = Array(9).fill(null);
   const [board, setBoard] = useState(initialBoard);
    const [courrentPlayer, setCourrentPlayer] = useState<"X"|"O">("X");

    useEffect(() => {
        // Reset the board and player when the game is re-activated
        if (gameActive) {
            setBoard(initialBoard);
            setCourrentPlayer("X");
        }
    }, [gameActive]);

    const handleClick = (index: number) => {
        //if game is over or the square is already taken can't click:
        if(!gameActive || board[index]){
            return;
        }
        //every click i want to "redraw" the board

        const newBoard = [...board];//copy the board
        newBoard[index] = courrentPlayer;
        setBoard(newBoard);

        const winner = checkWinner(newBoard);
        //situasions:
        //1. winner
        if(winner){
            onGameOver(winner);
        }
        //2. draw
        else if(!newBoard.includes(null)){
            onGameOver("Draw");
        }
        //3. continue playing
        else{
            setCourrentPlayer(courrentPlayer === "X" ? "O" : "X");
        }
    }
    const checkWinner = (board: (string | null)[]): string | null => {
        const winnigCombination = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        // I want to check if any of the winning combinations is in the board
        for(const combo of winnigCombination){
           const [a,b,c] = combo;
           // I go one by one and check if the board has the same value in the indexes
           if(board[a] && board[a] === board[b] && board[a] === board[c]){
               return board[a];
           }
        }
        return null;
    }
return (
    <div className="board">
        {board.map((value, index) => (
            <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
    </div>
);

};

export default Board;
