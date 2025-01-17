import React from "react";
import xImage from "../assets/x.png";
import oImage from "../assets/o.png";
import "./Square.css";

interface SquareProps {
    value: string | null;
    onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
    
    return (
        <button className="square" onClick={onClick}>
            {value === "X" && <img src={xImage} alt="X" />}
            {value === "O" && <img src={oImage} alt="O" />}
        </button>
    );
}
export default Square;