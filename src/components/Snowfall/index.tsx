import React from "react";
import "./styles.scss";

const Snowfall: React.FC = () => {
  const totalSnowflakes = 300;

  const getRandomNumber = (min: number, max: number): number =>
    Math.random() * (max - min) + min;

  return (
    <div className="snow-wrapper">
      {[...Array(totalSnowflakes)].map((_, index) => (
        <div
          key={index}
          className="snow"
          style={{
            left: `${getRandomNumber(0, 100)}vw`,
            animationDuration: `${getRandomNumber(5, 15)}s`,
            animationDelay: `${getRandomNumber(0, 5)}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
