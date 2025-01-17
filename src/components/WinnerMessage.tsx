import React from "react";
import "./WinnerMessage.css";

interface WinnerMessageProps {
  winner: string;
  onPlayAgain: () => void;
}

const WinnerMessage: React.FC<WinnerMessageProps> = ({ winner, onPlayAgain }) => {
  return (
    <div className="winner-message">
      <h2>{winner === "Draw" ? "It's a Draw!" : `Player ${winner} wins!`}</h2>
      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
};

export default WinnerMessage;