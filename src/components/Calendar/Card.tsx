// Card.tsx
import React from "react";
import "./styles.css";

interface CardProps {
  num: number;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ num, onClick }) => {
  return (
    <div className={`day-${num}`} onClick={onClick}>
      <label>
        <input type="checkbox" />
        <div className="door">
          <div className="front">
            <span className="date-num">{num}</span>
          </div>
          <div className="back"></div>
        </div>
      </label>
    </div>
  );
};

export default Card;
